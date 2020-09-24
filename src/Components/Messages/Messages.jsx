import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import MessageItemsContainer from './MessageItems/MessageItemsContainer';
import style from './messages.module.css';



const Messages = (props) => {
    return(
        <div className={style.dialogContainer}>
            <Dialogs state = {props.state}/>
            <MessageItemsContainer 
                state = {props.state}
                newMessageText = {props.state.messagesPage.newMessageText}
                dispatch = {props.dispatch}/>
        </div>
    )
}

export default Messages