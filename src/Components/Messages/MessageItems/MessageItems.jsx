import React from 'react'
import style from '../messages.module.css'


const Message = (props) => {
    return(
        <div className={style.message}>{props.text}</div>
        )
    }
    
    const MessageList = (props) => {
        
        let newMessage = React.createRef();
    
        let sendMessage = () => {
            props.sendMessage()
        }
    
        let onMessageChange = () => {
            let msgText = newMessage.current.value;
            props.updateMessageText(msgText)
        }

        let messageItem = props.state.messagesPage.messageText.map(message => <Message text={message.text}/>)
        return(
            <div className={style.userMessages}>
                {messageItem}   
                <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}/>
                <button onClick={ sendMessage }>Send</button>
            </div>       
        )
    }

export default MessageList