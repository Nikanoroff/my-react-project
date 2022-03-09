import { addMessage, ADD_MESSAGE } from "./messages/actions"
import { AUTHORS } from "../constants/common"


const middleware = store => next => action => {

    if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTHORS.bot) {
        const botMessage = {
            author: AUTHORS.bot,
            text: 'Сообщение от Бота из MiddleWare'
        }
        setTimeout(() => {
            store.dispatch(addMessage(action.payload.chatId, botMessage))
        }, 1500)

    }

    return next(action)
}

export default middleware