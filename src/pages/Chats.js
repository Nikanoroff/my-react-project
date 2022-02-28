// import { Paper } from "@mui/material"
// import { useState } from "react"
// import { useParams } from "react-router-dom"
// import MessageList from "../components/MessageList"
// import { AUTHORS } from "../constants/common"


// const initialChat = {
//     id1: {
//         name: 'Chat 1',
//         messages: [{ text: 'message from that Chat', author: AUTHORS.bot }]
//     },
//     id2: {
//         name: 'Chat 2',
//         messages: [{ text: 'message from another Chat', author: AUTHORS.me }]
//     }
// }



const Chats = () => {

    // const [chats, setChats] = useState(initialChat)
    // const { chatId } = useParams()

    return (
        <div>
            {/* <Paper elevation={1}>Наш Массив
                <MessageList messages={chats[chatId].messages} />
            </Paper> */}

        </div>
    )
}

export default Chats