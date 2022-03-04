export const ADD_CHATS = 'CHATS::ADD_CHAT'

export const addChat = (name) => ({
    type: ADD_CHATS,
    payload: name
})

