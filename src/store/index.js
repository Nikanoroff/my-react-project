import { combineReducers, createStore } from 'redux';
import chatsReduser from './chats/reduser';
import messagesReduser from './messages/reduser';
import profileReduser from './profile/reducer';

const redusers = combineReducers({
    chats: chatsReduser,
    messages: messagesReduser,
    profile: profileReduser

})


const store = createStore(
    redusers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store



