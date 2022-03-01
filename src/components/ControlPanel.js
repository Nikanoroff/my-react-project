import { useTheme } from "@emotion/react"
import { Send } from "@mui/icons-material"
import { Fab, TextField } from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { AUTHORS } from "../constants/common"
// import { useEffect, useState } from "react"


const ControlPanel = (props) => {
    const { chats, setChats } = props
    const [value, setValue] = useState('')
    const theme = useTheme()
    const { chatId } = useParams()


    const handleInput = (event) => {
        setValue(event.target.value)
    }

    const handlerButton = (event) => {

        if (value !== '') {
            const newObject = {
                ...chats,
                [chatId]: {
                    name: chats[chatId].name,
                    messages: [...chats[chatId].messages, {
                        text: value,
                        author: AUTHORS.me
                    }]
                }
            }
            setChats(newObject)
            setValue('')
        }
    }


    const handlerKeyDown = (event) => {
        if (event.key === 'Enter') {
            handlerButton()
        }
    }

    // useEffect(() => {
    //     let timer
    //     if (messagelist.length > 0 && messagelist[messagelist.length - 1]?.author === AUTHORS.me) {
    //         timer = setInterval(() => setMessageList([
    //             ...messagelist, {
    //                 text: ' Hello this is your Bot Stepan!',
    //                 author: AUTHORS.bot
    //             }
    //         ]), 1500)
    //     }
    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [messagelist])

    return (
        <div className='controlPlace'>
            <TextField
                style={{ margin: '20px' }}
                id='outlined-basic'
                label='Send Your Message'
                variant='outlined'
                className='input'
                placeholder='Say Hello Bot Stepan!'
                type={'text'}
                value={value}
                onChange={handleInput}
                autoFocus={true}
            />

            <Fab color='primary'
                className='button'
                type={'button'}
                onClick={handlerButton}
                onKeyDown={handlerKeyDown}
                style={{
                    borderColor: theme.palette.sec
                }}>
                <Send />
            </Fab>
        </div>
    )
}

export default ControlPanel