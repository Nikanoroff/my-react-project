import { useParams } from "react-router-dom"
// import { AUTHORS } from "../constants/common"
import { Paper } from '@mui/material'
import ChatList from '../components/ChatList'
import React, { useState } from 'react';
import NotFound from '../pages/NotFound'
import MessageList from '../components/MessageList'
import ControlPanel from "../components/ControlPanel"


const Chats = (props) => {
    const [chats, setChats] = props
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
            </div >
        </div>
    )
}

export default Chats
