import React from 'react';
import SidebarItem from './SidebarItem/SidebarItem'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarItem path='/profile' item='Profile' />
            <SidebarItem path='/messages' item='Messages' />
            <SidebarItem path='/music' item='Music' />
            <SidebarItem path='/news' item='News' />
            <SidebarItem path='friends' item='Friends' />
        </div>
    )
}

export default Sidebar