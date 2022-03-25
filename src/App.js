import './App.scss';
import React from 'react';
import Routers from './pages/Routers';
import { AuthProvider } from './hooks/AuthProvider';
// import { List, ListItem } from '@mui/material';
// import { Fab } from '@mui/material';
// import { Send } from '@mui/icons-material';
// import { useTheme } from '@emotion/react';
// import MessageList from './components/MessageList';
// import { Routes, Route, Link } from "react-router-dom";
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Chats from './pages/Chats';
// import NotFound from './pages/NotFound';
// import { grey } from "@mui/material/colors";
// import Gists from './pages/Gists';


function App() {
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
  );
}

export default App;