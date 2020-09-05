import React from 'react'
import ProfileInfo from './ProfileInfo/Profileinfo'
import ProfilePosts from './ProfilePosts/ProfilePosts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <ProfilePosts state = {props.state}
            newPostText = {props.state.profilePage.newPostText}
            addPost = {props.addPost}
            updateNewPostText = {props.updateNewPostText}/>
        </div>
    )
}

export default Profile