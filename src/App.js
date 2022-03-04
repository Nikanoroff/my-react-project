import './App.scss';
import React from 'react';
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


// export const MyThemeContext = React.createContext({ theme: 'dark' })
// export const DataContext = React.createContext({ message: ['hello', 'how have you been?'] })
// export const LocalizationContext = React.createContext('')


function App(props) {


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
            <Chats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header >

      {/* </MyThemeContext.Provider>

        </DataContext.Provider >

      </LocalizationContext.Provider > */}

    </React.Fragment >
  );
}

export default App;