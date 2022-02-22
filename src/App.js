import './App.scss';
import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';
import Counter from './Counter';
import Example from './Example';
import { AUTHORS } from './constants/common';
import { List, ListItem, TextField } from '@mui/material';
import { Fab } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import MessageList from './components/MessageList';



function App(props) {
  const [messagelist, setMessageList] = useState([])
  const [value, setValue] = useState('')
  const theme = useTheme()
  const inputRef = useRef(null)


  const handleInput = (event) => {
    setValue(event.target.value)
  }

  const handlerButton = (event) => {
    if (value !== '') {
      setMessageList([...messagelist, {
        text: value,
        author: AUTHORS.me
      }])
      setValue('')
    }
  }

  useEffect(() => {
    let timer
    if (messagelist.length > 0 && messagelist[messagelist.length - 1]?.author === AUTHORS.me) {
      timer = setInterval(() => setMessageList([
        ...messagelist, {
          text: ' Hello this is your Bot Stepan!',
          author: AUTHORS.bot
        }
      ]), 1500)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [messagelist])


  return (
    <React.Fragment>
      <header className='App-header'>
        <div className='workPlace'>
          <div className='chatList'>
            <List>
              <ListItem>
                Chat 1
              </ListItem>
              <ListItem>
                Chat 2
              </ListItem>
              <ListItem>
                Chat 3
              </ListItem>
            </List>
          </div>

          <div className='chatItem'>
            <>Наш Массив
              <MessageList messages={messagelist} />
            </>

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
                style={{
                  borderColor: theme.palette.sec
                }}>
                <Send />
              </Fab>
            </div>

          </div>
        </div>


        <h1>{props.myName}</h1>

        <Counter />
        <Example />
        <Message name_m={'Message from homework'} />


      </header >

    </React.Fragment >
  );
}

export default App;