import React from 'react'
import style from '../messages.module.css'
import {sendMessageActionCreator, updateMessageTextActionCreator} from '../../../Redux/messagesReduser'


const Message = (props) => {
    return(
        <div className={style.message}>{props.text}</div>
        )
    }
    
    const MessageList = (props) => {
        
        let newMessage = React.createRef();
    
        let sendMessage = () => {
           //props.dispatch(sendMessageActionCreator())
           props.sendMessage()
        }
        let onMessageChange = () => {
            let msgText = newMessage.current.value;
            // props.dispatch(updateMessageTextActionCreator(msgText))
            props.onMessageChange(msgText)
        }
        let messageItem = props.messageText.map(message => <Message text={message.text}/>)
        return(
            <div className={style.userMessages}>
                {messageItem}   
                <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}/>
                <button onClick={ sendMessage }>Send</button>
            </div>       
        )
    }

export default MessageList