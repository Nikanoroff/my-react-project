import { ADD_CHATS, DELETE_CHAT } from './actions';

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



        case DELETE_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList.slice(0, action.payload),
                    ...state.chatList.slice(action.payload + 1)
                ]
            }


        default:
            return state
    }
}

export default chatsReduser