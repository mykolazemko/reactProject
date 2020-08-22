import React from 'react';
import style from '../messages.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let path = '/messages/' + props.id;
    return(
        <div className={style.dialog}><NavLink to={path}>{props.name}</NavLink></div>
    )
}
let dialogMembers = [
    {id: 1, name: 'User1'},
    {id: 2, name: 'User2'},
    {id: 3, name: 'User3'},
    {id: 4, name: 'User4'},
    {id: 5, name: 'User5'},
]

const Dialogs = () => {
    return (
        <div>
            <Dialog id={dialogMembers[0].id} name={dialogMembers[0].name}/>
            <Dialog id={dialogMembers[1].id} name={dialogMembers[1].name}/>
            <Dialog id={dialogMembers[2].id} name={dialogMembers[2].name}/>
            <Dialog id={dialogMembers[3].id} name={dialogMembers[3].name}/>
            <Dialog id={dialogMembers[4].id} name={dialogMembers[4].name}/>
        </div>
    )
}

export default Dialogs