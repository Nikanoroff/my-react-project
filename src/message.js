import './App.scss';
import React from 'react';


function Message(props) {
    return <div style={{ background: props.backgroundYellow }}>
        <h1 className={'Message'}>Message</h1>
        <h2 className={'sutitle'}>{props.myMessage}</h2>
    </div>
}

export default Message;