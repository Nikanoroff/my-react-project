import './App.scss';
import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';
import Counter from './Counter';
import Example from './Example';
import { AUTHORS } from './constants/common';
import { List, ListItem, TextField, Paper } from '@mui/material';
// import { Fab } from '@mui/material';
// import { Send } from '@mui/icons-material';
// import { useTheme } from '@emotion/react';
// import MessageList from './components/MessageList';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import NotFound from './pages/NotFound';


const initialChats = {
  id1: {
    name: 'Chat1',
    messages: [{ message: 'message', author: AUTHORS.bot }]
  },
  id2: {
    name: 'Chat2',
    messages: [{ message: 'message by me', author: AUTHORS.me }]
  },
  id3: {
    name: 'Chat3',
    messages: [{ message: 'message by John', author: AUTHORS.me }]
  }
}


function App(props) {

  return (
    <React.Fragment>

      <header className='App-header'>
        <menu className='horizontalMenu'>
          <List>
            <ListItem>
              <Link to='home' className='link'>Home</Link>
            </ListItem>
            <ListItem>
              <Link to='profile' className='link'>Profile</Link>
            </ListItem>
            <ListItem>
              <Link to='chats' className='link'>Chat</Link>
            </ListItem>
          </List>
        </menu>


        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chats/:chatId' element={
            <Chats chats={chats} setChats={(chat) => setChats(chat)} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>




        <h1>{props.myName}</h1>

        <Counter />
        <Example />
        <Message name_m={'Message from homework'} />

        {/* <div children={'hello I am children'}></div> */}
      </header >

    </React.Fragment >
  );
}

export default App;