import './App.scss';
import React, { useEffect, useState } from 'react';
import { AUTHORS } from './constants/common';
import { List, ListItem } from '@mui/material';
// import { Fab } from '@mui/material';
// import { Send } from '@mui/icons-material';
// import { useTheme } from '@emotion/react';
// import MessageList from './components/MessageList';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import NotFound from './pages/NotFound';
import { grey } from "@mui/material/colors";


const initialChat = {
  id1: {
    name: 'Chat 1',
    messages: [{ text: 'message from Chat num one', author: AUTHORS.bot }]
  },
  id2: {
    name: 'Chat 2',
    messages: [{ text: 'message from another Chat', author: AUTHORS.me }]
  },
  id3: {
    name: 'Chat 3',
    messages: [{ text: 'message from  Chat number three ', author: AUTHORS.me }]
  }
}

// export const MyThemeContext = React.createContext({ theme: 'dark' })
// export const DataContext = React.createContext({ message: ['hello', 'how have you been?'] })
// export const LocalizationContext = React.createContext('')


function App(props) {
  const [chats, setChats] = useState(initialChat)

  return (
    <React.Fragment>

      {/* <LocalizationContext.Provider value={'en'}>

        <DataContext.Provider value={{ message: 'Vania!' }}>

          <MyThemeContext.Provider value={{ theme: 'dark' }}> */}

      <header className='App-header'>

        <List sx={{
          width: '100%',
          bgcolor: grey,
          maxWidth: 350,
          display: 'flex',
          justifyContent: 'space-between'
        }}>
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

        <div className='chatList'></div>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chats/:chatId' element={
            <Chats chats={chats} setChats={(chat) => setChats(chat)} />} />
          <Route path="*" element={<NotFound chats={chats} />} />
        </Routes>
      </header >

      {/* </MyThemeContext.Provider>

        </DataContext.Provider >

      </LocalizationContext.Provider > */}

    </React.Fragment >
  );
}

export default App;