import React from 'react'
import style from './profilePosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profileReduser'

const Post = (props) => {
    return(
        <div className={style.post}>{props.content}
        </div>
        )
    }    
    
    const ProfilePosts = (props) => {
        let newPostElement = React.createRef();

        let onAddPost = () => {
            props.addPost()
        }

        let onPostChange = () => {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }
        let postData = props.postText.map(post => <Post content={post.text}/>);
        return(
        <div>
            <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}/>
            <button onClick = { onAddPost }>Add New Post</button>
            {postData}
        </div>
    )
}

export default ProfilePosts