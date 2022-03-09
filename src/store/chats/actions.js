export const ADD_CHATS = 'CHATS::ADD_CHAT'
export const DELETE_CHAT = 'CHATS::DELETE_CHAT'

export const addChat = (name) => ({
    type: ADD_CHATS,
    payload: name
})

export const deleteChat = (index) => ({
    type: DELETE_CHAT,
    payload: index
})

