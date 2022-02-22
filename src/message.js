import './App.scss';


// function Message(props) {
//     return <div style={{ background: props.backgroundYellow }}>
//         <h1 className={'Message'}>Message</h1>
//         <h2 className={'sutitle'}>{props.myMessage}</h2>
//     </div>
// }

// export default Message;  можно создать и функцию (везде с большой буквы)

const Message = (props) => {
    return <div className={'Message'}>{props.name_m}
    </div>
}
export default Message;