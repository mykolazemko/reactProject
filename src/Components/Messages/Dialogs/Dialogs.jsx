import React from 'react';
import style from '../messages.module.css'
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    let path = '/messages/' + props.id;
    return(
        <div className={style.dialog}><NavLink to={path}>{props.name}</NavLink></div>
        )
    }
    
    
    const Dialogs = (props) => {
        let dialogs = props.state.messagesPage.dialogMembers.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
    return (
        <div>
            {dialogs}
        </div>
    )
}

export default Dialogs