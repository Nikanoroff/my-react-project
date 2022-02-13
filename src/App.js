import './App.scss';
import React from 'react';
// import Message from './message';

function App(props) {
  // const { myName, showGreen } = props
  // console.log({ showGreen })    хороший вариант посмотреть, что пришло
  return (
    <div>
      <header className={`App-header ${props.showGreen ? 'header-green' : 'header-blue'}`}
        style={{ top: props.paddingTop || '10px' }}>
        Hello folks! This is my new React App
        <h1>{props.myName}</h1>
      </header>

      {/* <Message></Message> */}

    </div>

  );
}

export default App;









// import logo from './logo.svg';
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}