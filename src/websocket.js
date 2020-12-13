class WebSocketService {

    static instance = null;
    callbacks = {};

    static getInstance(){
        if(!WebSocketService.instance){
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    constructor(){
        this.socketRef = null;
    }

    connect(chatUrl){
        //const path = `ws://127.0.0.1:8000/ws/chat/${chatUrl}/`; //For Localhost
        const path = `ws://34.198.84.251:8000/ws/chat/${chatUrl}/`; //For remote node's static IP
        console.log(path);
        this.socketRef = new WebSocket(path);
        this.socketRef.onopen = () => {
            console.log('websocket open');
        };

        this.socketNewMessage(JSON.stringify({
            command: 'buscar_mensajes'
        }))

        this.socketRef.onmessage = e => {
            // sending a message
            this.socketNewMessage(e.data);
        }
        this.socketRef.onerror = e => {
            console.log(e.message);
        }
        this.socketRef.onclose = () => {
            console.log('websocket is closed');
            this.connect();
        }
    }

    disconnect(){
        this.socketRef.close();
    }

    socketNewMessage(data){
        const parsedData = JSON.parse(data);
        const command = parsedData.command;
        if(Object.keys(this.callbacks).length === 0){
            return;
        }
        if (command === 'messages_dump'){
            this.callbacks[command](parsedData.messages);
        }
        if(command === 'nuevo_mensaje'){
            this.callbacks[command](parsedData.message);
        }
    }

    fetchMessages(username, chatId){
        this.sendMessage({
            command: 'buscar_mensajes',
            username: username,
            chatId: chatId
        });
    }

    newChatMessage(message){
        this.sendMessage({
            command: 'nuevo_mensaje',
            from: message.from,
            message: message.content,
            chatId: message.chatId
        });
    }

    addCallbacks(messagesCallback, newMessageCallback){
        this.callbacks['messages_dump'] = messagesCallback;
        this.callbacks['nuevo_mensaje'] =  newMessageCallback;
    }

    sendMessage(data){
        try{
            this.socketRef.send(JSON.stringify({ ...data}))
        } catch (err){
            console.log(err.message);
        }
    }

    state(){
        return this.socketRef.readyState;
    }

    waitForSocketConnection(callback){
        const socket = this.socketRef;
        const recursion = this.waitForSocketConnection;
        setTimeout(
            function(){
                if(socket.readyState === 1){
                    console.log('connection is secure');
                    if(callback != null){
                        callback();
                    }
                    return;
                } else {
                    console.log('waiting for connection...');
                    recursion(callback);
                }
            }, 1);

    }

}

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;
