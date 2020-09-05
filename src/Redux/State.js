import { render } from '../render'
  let state = {
    profilePage : {
      postText : [
          {id: 1, text: 'Post_1'},
          {id: 2, text: 'Post_2'},
          {id: 3, text: 'Post_3'},
          {id: 4, text: 'Post_4'},
          {id: 5, text: 'Post_5'}
        ],
        newPostText: ''
    },

    messagesPage : {
      messageText : [
        {id: 1, text: 'message1'},
        {id: 2, text: 'message2'},
        {id: 3, text: 'message3'},
        {id: 4, text: 'message4'},
        {id: 5, text: 'message5'}
      ],
    newMessageText: '',
      dialogMembers : [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'},
        {id: 4, name: 'User4'},
        {id: 5, name: 'User5'},
      ],
    },


    friendsPage : {
      friendsList : [
        {id: 1, name: 'Friend_1',},
        {id: 2, name: 'Friend_2',},
        {id: 3, name: 'Friend_3',},
        {id: 4, name: 'Friend_4',},
        {id: 5, name: 'Friend_5',},
      ]
    }
    
  }

  export let addPost = () => {
    let newPost = {id: 6, text: state.profilePage.newPostText}
    state.profilePage.postText.push(newPost);
    state.profilePage.newPostText = "";
    render(state)
  }

  export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text
    render(state)
  }

  export let sendMessage = () => {
    let message = {id: 6, text: state.messagesPage.newMessageText}
    state.messagesPage.messageText.push(message);
    state.messagesPage.newMessageText = "";
    render(state)
  }

  export let updateMessageText = (text) => {
    state.messagesPage.newMessageText = text
    render(state)
  }

  export default state;