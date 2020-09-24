import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profileReduser'
import ProfilePosts from './ProfilePosts'


const ProfilePostsContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }     
    return(      
        <ProfilePosts updateNewPostText = {onPostChange} addPost = {addPost} postText = {props.state.profilePage.postText}/>
    )  
}

export default ProfilePostsContainer