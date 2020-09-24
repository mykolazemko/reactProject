const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
}

const messagesReduser = (state = initialState, action) => {
    switch (action.type){
      case SEND_MESSAGE:
        let message = {id: 6, text: state.newMessageText}
        state.messageText.push(message);
        state.newMessageText = "";
        return state;
      case UPDATE_MESSAGE_TEXT:
        state.newMessageText = action.msgText;
        return state;
      default:
        return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (msgText) => ({type: UPDATE_MESSAGE_TEXT, msgText})

export default messagesReduser;