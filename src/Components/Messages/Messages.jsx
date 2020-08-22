import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import MessageList from './MessageList/MessageItems';
import style from './messages.module.css';



const Messages = (props) => {
    return(
        <div className={style.dialogContainer}>
            <Dialogs/>
            <MessageList/>
        </div>
    )
}

export default Messages