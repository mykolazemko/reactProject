import React from 'react'
import style from '../messages.module.css'


const Message = (props) => {
    return(
        <div className={style.message}>{props.text}</div>
        )
    }
    
    let newMessage = React.createRef();
    let sendMessage = () => {
        let msgText = newMessage.current.value;
        alert(msgText)
    }

const MessageList = (props) => {
    let messageItem = props.state.messagesPage.messageText.map(message => <Message text={message.text}/>)
    return(
        <div className={style.userMessages}>
            {messageItem}   
            <textarea ref={newMessage}/>
            <button onClick={ sendMessage }>Send</button>
        </div>       
    )
}

export default MessageList