const converted = {
    body: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "#205f99",
      fontFamily: '"proxima-nova", "Source Sans Pro", sans-serif',
      fontSize: "2em",
      letterSpacing: "0.1px",
      color: "#0a4177",
      textRendering: "optimizeLegibility",
      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.004)",
      WebkitFontSmoothing: "antialiased"
    },
    "#frame": {
      width: "100%",
      minWidth: "360px",
      height: "100vh",
      minHeight: "300px",
      background: "#E6EAEA"
    },
    "@media screen and (max-width: 360px)": {
      "#frame": { width: "100%", height: "100vh" }
    },
    "#frame #sidepanel": {
      cssFloat: "left",
      minWidth: "280px",
      maxWidth: "340px",
      width: "40%",
      height: "100%",
      background: "#1e4368",
      color: "#f5f5f5",
      overflow: "hidden",
      position: "relative"
    },
    "@media screen and (max-width: 735px)": [
      { "#frame #sidepanel": { width: "58px", minWidth: "58px" } },
      {
        "#frame #sidepanel #profile": {
          width: "100%",
          margin: "0 auto",
          padding: "5px 0 0 0",
          background: "#3669a0"
        }
      },
      { "#frame #sidepanel #profile .wrap": { height: "55px" } },
      {
        "#frame #sidepanel #profile .wrap img": {
          width: "40px",
          marginLeft: "4px"
        }
      },
      { "#frame #sidepanel #profile .wrap p": { display: "none" } },
      { "#frame #sidepanel #profile .wrap i.expand-button": { display: "none" } },
      {
        "#frame #sidepanel #profile .wrap #status-options": {
          width: "58px",
          marginTop: "57px"
        }
      },
      {
        "#frame #sidepanel #profile .wrap #status-options.active": {
          marginTop: "62px"
        }
      },
      {
        "#frame #sidepanel #profile .wrap #status-options:before": {
          marginLeft: "23px"
        }
      },
      {
        "#frame #sidepanel #profile .wrap #status-options ul li": {
          padding: "15px 0 35px 22px"
        }
      },
      {
        "#frame #sidepanel #profile .wrap #status-options ul li span.status-circle": {
          width: "14px",
          height: "14px"
        }
      },
      {
        "#frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before": {
          height: "18px",
          width: "18px"
        }
      },
      {
        "#frame #sidepanel #profile .wrap #status-options ul li p": {
          display: "none"
        }
      },
      { "#frame #sidepanel #search": { display: "none" } },
      {
        "#frame #sidepanel #contacts": {
          height: "calc(100% - 149px)",
          overflowY: "scroll",
          overflowX: "hidden"
        },
        "#frame #sidepanel #contacts::-webkit-scrollbar": { display: "none" }
      },
      {
        "#frame #sidepanel #contacts ul li.contact": { padding: "6px 0 46px 8px" }
      },
      { "#frame #sidepanel #contacts ul li.contact .wrap": { width: "100%" } },
      {
        "#frame #sidepanel #contacts ul li.contact .wrap img": {
          marginRight: "0px"
        }
      },
      {
        "#frame #sidepanel #contacts ul li.contact .wrap .meta": {
          display: "none"
        }
      },
      {
        "#frame #sidepanel #bottom-bar button": {
          cssFloat: "none",
          width: "100%",
          padding: "15px 0"
        }
      },
      {
        "#frame #sidepanel #bottom-bar button:nth-child(1)": {
          borderRight: "none",
          borderBottom: "1px solid #2c3e50"
        }
      },
      { "#frame #sidepanel #bottom-bar button i": { fontSize: "1.3em" } },
      { "#frame #sidepanel #bottom-bar button span": { display: "none" } },
      {
        "#frame .content": {
          width: "calc(100% - 100px)",
          minWidth: "300px !important"
        }
      },
      { "#frame .content .messages": { maxHeight: "calc(100% - 105px)" } },
      {
        "#frame .content .message-input .wrap input": {
          padding: "15px 32px 16px 8px"
        }
      },
      {
        "#frame .content .message-input .wrap .attachment": {
          marginTop: "17px",
          right: "65px"
        }
      },
      { "#frame .content .message-input .wrap button": { padding: "16px 0" } }
    ],
    "#frame #sidepanel #profile": { width: "80%", margin: "25px auto" },
    "#frame #sidepanel #profile.expanded .wrap": {
      height: "210px",
      lineHeight: "initial"
    },
    "#frame #sidepanel #profile.expanded .wrap p": { marginTop: "20px" },
    "#frame #sidepanel #profile.expanded .wrap i.expand-button": {
      MozTransform: "scaleY(-1)",
      OTransform: "scaleY(-1)",
      WebkitTransform: "scaleY(-1)",
      transform: "scaleY(-1)",
      filter: "flipH()",
      msFilter: '"FlipH"'
    },
    "#frame #sidepanel #profile .wrap": {
      height: "60px",
      lineHeight: "60px",
      overflow: "hidden",
      MozTransition: "0.3s height ease",
      OTransition: "0.3s height ease",
      WebkitTransition: "0.3s height ease",
      transition: "0.3s height ease"
    },
    "#frame #sidepanel #profile .wrap img": {
      width: "50px",
      borderRadius: "50%",
      padding: "3px",
      border: "2px solid #e74c3c",
      height: "auto",
      cssFloat: "left",
      cursor: "pointer",
      MozTransition: "0.3s border ease",
      OTransition: "0.3s border ease",
      WebkitTransition: "0.3s border ease",
      transition: "0.3s border ease"
    },
    "#frame #sidepanel #profile .wrap img.online": {
      border: "2px solid #2ecc71"
    },
    "#frame #sidepanel #profile .wrap img.away": { border: "2px solid #f1c40f" },
    "#frame #sidepanel #profile .wrap img.busy": { border: "2px solid #e74c3c" },
    "#frame #sidepanel #profile .wrap img.offline": {
      border: "2px solid #95a5a6"
    },
    "#frame #sidepanel #profile .wrap p": {
      cssFloat: "left",
      marginLeft: "15px"
    },
    "#frame #sidepanel #profile .wrap i.expand-button": {
      cssFloat: "right",
      marginTop: "23px",
      fontSize: "0.8em",
      cursor: "pointer",
      color: "#435f7a"
    },
    "#frame #sidepanel #profile .wrap #status-options": {
      position: "absolute",
      opacity: 0,
      visibility: "hidden",
      width: "150px",
      margin: "70px 0 0 0",
      borderRadius: "6px",
      zIndex: 99,
      lineHeight: "initial",
      background: "#245d92",
      MozTransition: "0.3s all ease",
      OTransition: "0.3s all ease",
      WebkitTransition: "0.3s all ease",
      transition: "0.3s all ease"
    },
    "#frame #sidepanel #profile .wrap #status-options.active": {
      opacity: 1,
      visibility: "visible",
      margin: "75px 0 0 0"
    },
    "#frame #sidepanel #profile .wrap #status-options:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      borderBottom: "8px solid #1e5c96",
      margin: "-8px 0 0 24px"
    },
    "#frame #sidepanel #profile .wrap #status-options ul": {
      overflow: "hidden",
      borderRadius: "6px"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li": {
      padding: "15px 0 30px 18px",
      display: "block",
      cursor: "pointer"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li:hover": {
      background: "#286097"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li span.status-circle": {
      position: "absolute",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      margin: "5px 0 0 0"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before": {
      content: "''",
      position: "absolute",
      width: "14px",
      height: "14px",
      margin: "-3px 0 0 -3px",
      background: "transparent",
      borderRadius: "50%",
      zIndex: 0
    },
    "#frame #sidepanel #profile .wrap #status-options ul li p": {
      paddingLeft: "12px"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li#status-online span.status-circle": {
      background: "#2ecc71"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li#status-online.active span.status-circle:before": {
      border: "1px solid #2ecc71"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li#status-away span.status-circle": {
      background: "#f1c40f"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li#status-away.active span.status-circle:before": {
      border: "1px solid #f1c40f"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li#status-busy span.status-circle": {
      background: "#e74c3c"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li#status-busy.active span.status-circle:before": {
      border: "1px solid #e74c3c"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li#status-offline span.status-circle": {
      background: "#95a5a6"
    },
    "#frame #sidepanel #profile .wrap #status-options ul li#status-offline.active span.status-circle:before": {
      border: "1px solid #95a5a6"
    },
    "#frame #sidepanel #profile .wrap #expanded": {
      padding: "100px 0 0 0",
      display: "block",
      lineHeight: "initial !important"
    },
    "#frame #sidepanel #profile .wrap #expanded label": {
      cssFloat: "left",
      clear: "both",
      margin: "0 8px 5px 0",
      padding: "5px 0"
    },
    "#frame #sidepanel #profile .wrap #expanded input": {
      border: "none",
      marginBottom: "6px",
      background: "#32465a",
      borderRadius: "3px",
      color: "#f5f5f5",
      padding: "7px",
      width: "calc(100% - 43px)"
    },
    "#frame #sidepanel #profile .wrap #expanded input:focus": {
      outline: "none",
      background: "#24629c"
    },
    "#frame #sidepanel #search": {
      borderTop: "1px solid #225180",
      borderBottom: "1px solid #225180",
      fontWeight: 300
    },
    "#frame #sidepanel #search label": {
      position: "absolute",
      margin: "10px 0 0 20px"
    },
    "#frame #sidepanel #search input": {
      fontFamily: '"proxima-nova",  "Source Sans Pro", sans-serif',
      padding: "10px 0 10px 46px",
      width: "calc(100% - 25px)",
      border: "none",
      background: "#1e4c7a",
      color: "#f5f5f5"
    },
    "#frame #sidepanel #search input:focus": {
      outline: "none",
      background: "#1f63a3"
    },
    "#frame #sidepanel #search input::-webkit-input-placeholder": {
      color: "#f5f5f5"
    },
    "#frame #sidepanel #search input::-moz-placeholder": { color: "#f5f5f5" },
    "#frame #sidepanel #search input:-ms-input-placeholder": { color: "#f5f5f5" },
    "#frame #sidepanel #search input:-moz-placeholder": { color: "#f5f5f5" },
    "#frame #sidepanel #contacts": {
      height: "calc(100% - 177px)",
      overflowY: "scroll",
      overflowX: "hidden"
    },
    "#frame #sidepanel #contacts.expanded": { height: "calc(100% - 334px)" },
    "#frame #sidepanel #contacts::-webkit-scrollbar": {
      width: "8px",
      background: "#1c4a77"
    },
    "#frame #sidepanel #contacts::-webkit-scrollbar-thumb": {
      backgroundColor: "#1a4b83"
    },
    "#frame #sidepanel #contacts ul li.contact": {
      position: "relative",
      padding: "10px 0 15px 0",
      fontSize: "0.9em",
      cursor: "pointer"
    },
    "#frame #sidepanel #contacts ul li.contact:hover": { background: "#1f5891" },
    "#frame #sidepanel #contacts ul li.contact.active": {
      background: "#1f5891",
      borderRight: "5px solid #2365a3"
    },
    "#frame #sidepanel #contacts ul li.contact.active span.contact-status": {
      border: "2px solid #1d568f !important"
    },
    "#frame #sidepanel #contacts ul li.contact .wrap": {
      width: "88%",
      margin: "0 auto",
      position: "relative"
    },
    "#frame #sidepanel #contacts ul li.contact .wrap span": {
      position: "absolute",
      left: "0",
      margin: "-2px 0 0 -2px",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      border: "2px solid #194470",
      background: "#95a5a6"
    },
    "#frame #sidepanel #contacts ul li.contact .wrap span.online": {
      background: "#2ecc71"
    },
    "#frame #sidepanel #contacts ul li.contact .wrap span.away": {
      background: "#f1c40f"
    },
    "#frame #sidepanel #contacts ul li.contact .wrap span.busy": {
      background: "#e74c3c"
    },
    "#frame #sidepanel #contacts ul li.contact .wrap img": {
      width: "40px",
      borderRadius: "50%",
      cssFloat: "left",
      marginRight: "10px"
    },
    "#frame #sidepanel #contacts ul li.contact .wrap .meta": {
      padding: "5px 0 0 0"
    },
    "#frame #sidepanel #contacts ul li.contact .wrap .meta .name": {
      fontWeight: 600
    },
    "#frame #sidepanel #contacts ul li.contact .wrap .meta .preview": {
      margin: "5px 0 0 0",
      padding: "0 0 1px",
      fontWeight: 400,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      MozTransition: "1s all ease",
      OTransition: "1s all ease",
      WebkitTransition: "1s all ease",
      transition: "1s all ease"
    },
    "#frame #sidepanel #contacts ul li.contact .wrap .meta .preview span": {
      position: "initial",
      borderRadius: "initial",
      background: "none",
      border: "none",
      padding: "0 2px 0 0",
      margin: "0 0 0 1px",
      opacity: 0.5
    },
    "#frame #sidepanel #bottom-bar": {
      position: "absolute",
      width: "100%",
      bottom: "0"
    },
    "#frame #sidepanel #bottom-bar button": {
      cssFloat: "left",
      border: "none",
      width: "50%",
      padding: "10px 0",
      background: "#275a8d",
      color: "#f5f5f5",
      cursor: "pointer",
      fontSize: "0.85em",
      fontFamily: '"proxima-nova",  "Source Sans Pro", sans-serif'
    },
    "#frame #sidepanel #bottom-bar button:focus": { outline: "none" },
    "#frame #sidepanel #bottom-bar button:nth-child(1)": {
      borderRight: "1px solid #2c3e50"
    },
    "#frame #sidepanel #bottom-bar button:hover": { background: "#1f68ac" },
    "#frame #sidepanel #bottom-bar button i": {
      marginRight: "3px",
      fontSize: "1em"
    },
    "#frame .content": {
      cssFloat: "right",
      width: "60%",
      height: "100%",
      overflow: "hidden",
      position: "relative"
    },
    "@media screen and (min-width: 900px)": {
      "#frame .content": { width: "calc(100% - 340px)" }
    },
    "#frame .content .contact-profile": {
      width: "100%",
      height: "80px",
      lineHeight: "80px",
      background: "#f5f5f5"
    },
    "#frame .content .contact-profile img": {
      width: "60px",
      borderRadius: "50%",
      cssFloat: "left",
      margin: "9px 12px 0 9px"
    },
    "#frame .content .contact-profile p": { cssFloat: "left" },
    "#frame .content .contact-profile .social-media": { cssFloat: "right" },
    "#frame .content .contact-profile .social-media i": {
      marginLeft: "14px",
      cursor: "pointer"
    },
    "#frame .content .contact-profile .social-media i:nth-last-child(1)": {
      marginRight: "20px"
    },
    "#frame .content .contact-profile .social-media i:hover": {
      color: "#2567a5"
    },
    "#frame .content .messages": {
      height: "auto",
      minHeight: "calc(100% - 93px)",
      maxHeight: "calc(100% - 93px)",
      overflowY: "scroll",
      overflowX: "hidden",
      width: "100%"
    },
    "#frame .content .messages::-webkit-scrollbar": {
      width: "8px",
      background: "transparent"
    },
    "#frame .content .messages::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0.3)"
    },
    "#frame .content .messages ul li": {
      display: "inline-block",
      clear: "both",
      cssFloat: "left",
      margin: "15px 15px 5px 15px",
      width: "calc(100% - 25px)",
      fontSize: "0.9em"
    },
    "#frame .content .messages ul li:nth-last-child(1)": { marginBottom: "20px" },
    "#frame .content .messages ul li.sent img": { margin: "6px 8px 0 0" },
    "#frame .content .messages ul li.sent p": {
      background: "#205f99",
      color: "#f5f5f5"
    },
    "#frame .content .messages ul li.replies img": {
      cssFloat: "right",
      margin: "6px 0 0 8px"
    },
    "#frame .content .messages ul li.replies p": {
      background: "#f5f5f5",
      cssFloat: "right"
    },
    "#frame .content .messages ul li img": {
      width: "38px",
      borderRadius: "50%",
      cssFloat: "left"
    },
    "#frame .content .messages ul li p": {
      display: "inline-block",
      padding: "10px 15px",
      borderRadius: "20px",
      maxWidth: "300px",
      lineHeight: "130%"
    },
    "@media screen and (min-width: 735px)": {
      "#frame .content .messages ul li p": { maxWidth: "300px" }
    },
    "#frame .content .message-input": {
      position: "absolute",
      bottom: "0",
      width: "100%",
      zIndex: 99
    },
    "#frame .content .message-input .wrap": { position: "relative" },
    "#frame .content .message-input .wrap input": {
      fontFamily: '"proxima-nova",  "Source Sans Pro", sans-serif',
      cssFloat: "left",
      border: "none",
      width: "calc(100% - 90px)",
      padding: "11px 32px 10px 8px",
      fontSize: "0.8em",
      color: "#26629e"
    },
    "#frame .content .message-input .wrap input:focus": { outline: "none" },
    "#frame .content .message-input .wrap .attachment": {
      position: "absolute",
      right: "60px",
      zIndex: 4,
      marginTop: "10px",
      fontSize: "1.1em",
      color: "#2268aa",
      opacity: 0.5,
      cursor: "pointer"
    },
    "#frame .content .message-input .wrap .attachment:hover": { opacity: 1 },
    "#frame .content .message-input .wrap button": {
      cssFloat: "right",
      border: "none",
      width: "50px",
      padding: "12px 0",
      cursor: "pointer",
      background: "#1e5185",
      color: "#f5f5f5"
    },
    "#frame .content .message-input .wrap button:hover": {
      background: "#236fb6"
    },
    "#frame .content .message-input .wrap button:focus": { outline: "none" }
  };
  
  export default converted;