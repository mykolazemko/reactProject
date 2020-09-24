import profileReduser from './profileReduser';
import messagesReduser from './messagesReduser';

let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log('.')
  },
  
  getState() {
    return this._state
  },
  subscriber (observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action)
    this._state.messagesPage = messagesReduser(this._state.messagesPage, action)
    this._callSubscriber(this._state)    
  }
}

 


export default store;
window.store = store;