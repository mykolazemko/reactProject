import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import MessageItems from './MessageItems/MessageItems';
import style from './messages.module.css';



const Messages = (props) => {
    return(
        <div className={style.dialogContainer}>
            <Dialogs state = {props.state}/>
            <MessageItems state = {props.state}/>
        </div>
    )
}

export default Messages