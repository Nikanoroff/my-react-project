import './App.scss';
import React, { useEffect, useState } from 'react';
import Message from './Message';
import Counter from './Counter';
import Example from './Example';
import { AUTHORS } from './constants/common';



function App(props) {
  const [messagelist, setMessageList] = useState([])
  const [value, setValue] = useState('')

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
        {/* style={{ top: props.paddingTop || '10px' }}> */}
        Hello folks! This is my new React App

        <h1>{props.myName}</h1>

        <Counter />
        <Example />
        <Message name_m={'Message from homework'} />

        <>Наш Массив
          <ul className='messanger'>
            {messagelist.map((item, index) => {
              return (
                <li className='messageBox '>
                  <div className='message'>{item.text}</div>
                  <div className='author'>{item.author}</div>

                </li>)
            })}
          </ul>
        </>

      </header >

      <input className='input' placeholder='send message here' type={'text'} value={value} onChange={handleInput} />
      <button className='button' type={'button'} onClick={handlerButton}>Send</button>

    </React.Fragment >
  );
}

export default App;