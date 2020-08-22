import React from 'react'
import style from './profilePosts.module.css'

let postText = [
    {id: 1, text: 'Post_1'},
    {id: 2, text: 'Post_2'},
    {id: 3, text: 'Post_3'},
    {id: 4, text: 'Post_4'},
    {id: 5, text: 'Post_5'}


]

const Post = (props) => {
    return(
        <div className={style.post}>{props.content}</div>
    )
}

const ProfilePosts = () => {
    return(
        <div>
            <div>
                <Post content='Post_1'/>
                <Post content='Post_2'/>
                <Post content='Post_3'/>
                <Post content='Post_4'/>
            </div>
        </div>
    )
}

export default ProfilePosts