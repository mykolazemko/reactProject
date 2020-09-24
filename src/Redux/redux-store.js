import {createStore, combineReducers} from 'redux';
import profileReduser from './profileReduser';
import messagesReduser from './messagesReduser';

let redusers = combineReducers({
    profilePage: profileReduser,
    messagesPage: messagesReduser
});

let store = createStore(redusers);

export default store;