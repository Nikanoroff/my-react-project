import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const name = 'Vania is here! '

ReactDOM.render(
  <React.StrictMode>
    <App myName={name} showGreen={false} paddingTop={'100px'} />
  </React.StrictMode>,
  document.getElementById('root')
);

//в App передали пропсы(свойства) и они передались как обьект
