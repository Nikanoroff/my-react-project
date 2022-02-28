import './App.scss';
import React, { useEffect, useState } from 'react';
import Message from './Message';
import Counter from './Counter';
import Example from './Example';
import { AUTHORS } from './constants/common';
import { List, ListItem, TextField, Paper } from '@mui/material';
import { Fab } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import MessageList from './components/MessageList';

import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import NotFound from './pages/NotFound';



function App(props) {
  const [messagelist, setMessageList] = useState([])
  const [value, setValue] = useState('')
  const theme = useTheme()


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

  const handlerKeyDown = (event) => {
    if (event.key === 'Enter') {
      handlerButton()
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

        <div className='chatList'></div>


        <div className='workPlace'>
          <div className='chatList'>
            <List>
              <ListItem>
                <Link to='/' className='link' >Home</Link>
              </ListItem>
              <ListItem>
                <Link to='/profile' className='link'>Profile</Link>
              </ListItem>
              <ListItem>
                <Link to='/chats' className='link' >Chats</Link>
              </ListItem>
            </List>
          </div>

          <div className='chatItem'>


            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/chats/:chatId' element={<Chats />} />
              <Route path="*" element={<NotFound />} />


            </Routes>


            <Paper>Наш Массив
              <MessageList messages={messagelist} />
            </Paper>

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