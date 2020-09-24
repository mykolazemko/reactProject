import React from 'react'
import ProfileInfo from './ProfileInfo/Profileinfo'
import ProfilePosts from './ProfilePosts/ProfilePosts';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <ProfilePostsContainer state = {props.state}
            newPostText = {props.state.profilePage.newPostText}
            dispatch = {props.dispatch}/>
        </div>
    )
}

export default Profile