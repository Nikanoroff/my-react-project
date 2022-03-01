import { Paper } from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ChatList from "../components/ChatList"
import ControlPanel from "../components/ControlPanel"
import MessageList from "../components/MessageList"
import { AUTHORS } from "../constants/common"
import NotFound from "./NotFound"






const Chats = (props) => {
    const { chats, setChats } = props
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
                    <ControlPanel chats={chats} setChats={setChats} />
                </Paper>
            </div>

        </div>
    )

}

export default Chats