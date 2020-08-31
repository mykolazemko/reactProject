import React from 'react'
import style from './profilePosts.module.css'



const Post = (props) => {
    return(
        <div className={style.post}>{props.content}
        </div>
        )
    }

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert( text )
    }
    
    const ProfilePosts = (props) => {
        let postData = props.state.profilePage.postText.map(post => <Post content={post.text}/>);
        return(
            <div>
            <textarea ref = {newPostElement}></textarea>
            <button onClick = { addPost }>Add New Post</button>
            {postData}
        </div>
    )
}

export default ProfilePosts