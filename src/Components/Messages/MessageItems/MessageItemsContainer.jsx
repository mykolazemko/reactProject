import React from 'react'
import {sendMessageActionCreator, updateMessageTextActionCreator} from '../../../Redux/messagesReduser'
import MessageItems from './MessageItems'


    const MessageList = (props) => { 
        let sendMessage = () => {
           props.dispatch(sendMessageActionCreator())
        }
        let onMessageChange = (msgText) => {
            props.dispatch(updateMessageTextActionCreator(msgText))
        }
        return(
           <MessageItems sendMessage={sendMessage} onMessageChange={onMessageChange} messageText={props.state.messagesPage.messageText}/>   
        )
    }

export default MessageList