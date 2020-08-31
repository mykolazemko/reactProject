import React from 'react'
import ProfileInfo from './ProfileInfo/Profileinfo'
import ProfilePosts from './ProfilePosts/ProfilePosts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <ProfilePosts state = {props.state}/>
        </div>
    )
}

export default Profile