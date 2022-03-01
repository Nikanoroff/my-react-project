import { createStore } from 'redux';
import profileReduser from './profile/reducer';


const store = createStore(profileReduser, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())

export default store


