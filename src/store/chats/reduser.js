import { ADD_CHATS } from './actions';

const initialState = {
    chatList: []
}


const chatsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHATS:
            const newChat = {
                id: `id${state.chatList.length}`,
                name: action.payload
            }

            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    newChat
                ]
            }
        default:
            return state
    }
}

export default chatsReduser