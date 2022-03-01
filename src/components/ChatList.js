// import { Link } from "@mui/material"
import { List, ListItem } from "@mui/material"
import { useParams, Link } from "react-router-dom"

const ChatList = (props) => {

    const { chatId } = useParams()
    const { chats } = props


    return (
        <List>
            {Object.keys(chats).map((id, index) => (
                <ListItem key={index}>
                    <Link to={`/chats/${id}`}>
                        <b style={{ color: id === chatId ? 'green' : 'grey' }}>
                            {chats?.[id]?.name}
                        </b>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default ChatList


