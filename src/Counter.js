import React, { useEffect, useState } from 'react'


// export class Counter extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log('constructor')

//         this.state = {
//             count: 0
//         }
//     }

//     componentDidMount() {
//         console.log('componentDidMount')
//     }

//     componentDidUpdate() {
//         console.log('componentDidUpdate')
//     }

//     handlerButton = () => {
//         this.setState({ count: this.state.count + 1 })
//     }

//     render() {
//         console.log('rander');
//         return (
//             <div>
//                 <span className='counter'>rendered!</span>
//                 <button onClick={this.handlerButton}>Parent btn</button>
//                 <Child />
//             </div>
//         )
//     }
// }

// class Child extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log('Children constructor');

//     }

//     componentDidMount() {
//         console.log(' Child componentDidMount')
//     }


//     render() {
//         console.log('Children rander');
//         return (
//             <div>
//                 Child
//             </div>
//         )
//     }
// }





// --------------------------------------------

const Counter = (props) => {
    return (
        <div>
            <span className='counter'>{props.value}</span>
        </div >
    )
}
//эт функциональный подход
export default Counter;



// setState - это готовый метод из React
// !!!!!!!!!
//useState - это хук (мы можем хранит там разные типы данных, не обязательно примитивы)
// const [count, setCount] = useState(0) - это диструктуризация массива // будет массив [ 1 число, функция () => void ]

// !!!!!!!!!
// const [count, setCount] = useState(0)
// const [здесь любое значение, и здесь] = useState(0)
// но есть договоренность
// пример
// const [orange, setOrange] = useState(0)
// const [example, setExample] = useState(0)