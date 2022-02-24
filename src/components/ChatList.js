import { ListItem, List } from "@mui/material";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";


const ChatList = (props) => {
    const { chatId } = useParams()
    const { chats } = props
    return (
        <List>
            {Object.keys(chats).map((id, index) => (
                <ListItem key={index}>
                    <Link to={`/chats/${id}`}>
                        {chats[id].name}

                        <b style={{ color: id === chatId ? 'grey' : 'blue' }}>
                            {chats[id].name}
                        </b>

                    </Link>
                </ListItem>
            ))}

        </List>
    )
}

export default ChatList