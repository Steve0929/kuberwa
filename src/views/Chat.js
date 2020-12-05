import React from 'react';
import ChatComponent from '../components/Chat/Chat';
import WebSocketInstance from '../websocket';

class Chat extends React.Component{

  // componentDidMount(){
  //   WebSocketInstance.connect();
  // }

  render(){
    return <ChatComponent/>
  }

}

export default Chat;