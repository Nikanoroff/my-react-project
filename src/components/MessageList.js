import PropTypes from "prop-types"
import { AUTHORS } from "../constants/common";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AndroidIcon from '@mui/icons-material/Android';

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { grey } from "@mui/material/colors";


const MessageList = (props) => {
    const { messages } = props

    return (
        <div className='messanger'>

            <List sx={{ width: '100%', bgcolor: grey }}>

                {messages?.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar>
                                {item.author === AUTHORS.me ? <AccountCircleIcon /> : <AndroidIcon />}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.text} secondary={item.author} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({

            text: PropTypes.string,
            author: PropTypes.string

        }))
}


export default MessageList
