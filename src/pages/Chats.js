import { Paper } from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ChatList from "../components/ChatList"
import MessageList from "../components/MessageList"
import { AUTHORS } from "../constants/common"
import NotFound from "./NotFound"


const initialChat = {
    id1: {
        name: 'Chat 1',
        messages: [{ text: 'message from Chat num one', author: AUTHORS.bot }]
    },
    id2: {
        name: 'Chat 2',
        messages: [{ text: 'message from another Chat', author: AUTHORS.me }]
    },
    id3: {
        name: 'Chat 3',
        messages: [{ text: 'message from  Chat number three ', author: AUTHORS.me }]
    }
}



const Chats = () => {
    const [chats, setChats] = useState(initialChat)
    const { chatId } = useParams()

    if (!chats[chatId]) {
        return <NotFound />
    }
    return (
        <div className='workPlace'>

            <div className='chatList'>
                <ChatList chats={chats} />
            </div>

            <div className='chatItem'>
                <Paper elevation={1}>
                    <MessageList messages={chats[chatId].messages} />
                </Paper>
            </div>

        </div>
    )

}

export default Chats