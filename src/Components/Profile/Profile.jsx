import React from 'react'
import ProfileInfo from './ProfileInfo/Profileinfo'
import ProfilePosts from './ProfilePosts/ProfilePosts';

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <ProfilePosts/>
        </div>
    )
}

export default Profile