const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postText : [
        {id: 1, text: 'Post_1'},
        {id: 2, text: 'Post_2'},
        {id: 3, text: 'Post_3'},
        {id: 4, text: 'Post_4'},
        {id: 5, text: 'Post_5'}
      ],
      newPostText: ''
  }

const profileReduser = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {id: 6, text: state.newPostText}
            state.postText.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    } 
}

export const addPostActionCreator = () => ({type: ADD_POST}) 
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text})

export default profileReduser