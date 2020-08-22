import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarItem = (props) => {
    return(
        <div>
            <NavLink to={props.path}>{ props.item }</NavLink>
        </div>
    )
}

export default SidebarItem