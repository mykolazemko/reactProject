import React from 'react'
import style from '../messages.module.css'
import { NavLink } from 'react-router-dom'

let messageText = [
    {id: 1, text: 'message1'},
    {id: 2, text: 'message2'},
    {id: 3, text: 'message3'}
]

const Message = (props) => {
    return(
        <div className={style.message}>{props.text}</div>
    )
}

const Messages = () => {
    return(
        <div className={style.userMessages}>
            <Message text={messageText[0].text}/>
            <Message text={messageText[1].text}/>
            <Message text={messageText[2].text}/>
        </div>       
    )
}

export default Messages