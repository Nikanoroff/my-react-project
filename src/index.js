import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Message from './message';

const name = 'Vania is here! '
const m = 'hello this is my message!'


ReactDOM.render(
  <React.StrictMode>
    <App myName={name} showGreen={false} paddingTop={'100px'} />
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(
  <React.StrictMode>
    <Message myMessage={m} backgroundYellow={'yellow'} />
  </React.StrictMode>,
  document.getElementById('message')
);


//в App передали пропсы(свойства) и они передались как обьект
