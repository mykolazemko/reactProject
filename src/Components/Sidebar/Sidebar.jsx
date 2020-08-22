import React from 'react';
import SidebarItem from './SidebarItem'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarItem path='/profile' item='Profile' />
            <SidebarItem path='/messages' item='Messages' />
            <SidebarItem path='/music' item='Music' />
            <SidebarItem path='/news' item='News' />
            <SidebarItem path='' item='Lorem Ipsum' />
        </div>
    )
}

export default Sidebar