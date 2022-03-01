// import { useContext } from "react"
// import { DataContext, LocalizationContext, MyThemeContext } from "../App"

const Home = () => {
    return (
        <div>
            <h1> Home</h1>
        </div>
    )
}

export default Home







// Example

// const Home = (props) => {
//     HOC(example)
//     const withLogger = (fn) => {
//         return function (...args) {
//             console.log(args);
//             return fn(...args)
//         }
//     }
//     const foo = (a, b) => a + b
//     const bar = withLogger(foo)


//     const contextValue = useContext(MyThemeContext)
//     const dataValue = useContext(DataContext)
//     const locale = useContext(LocalizationContext)

//     return (
//         <div>
//             <h1> Home</h1>
//             <div>{props.message}</div>
//             <b>{contextValue.theme}</b>
//             <div>{dataValue.message}</div>
//             <div>{locale}</div>

//             <div>{bar(1, 2)}</div> HOC
//         </div>
//     )
// }

// export default Home



//Example 2

// const Home = (props) => {
//     return (
//         <div>
//             <h1> Home</h1>
//             <div>{props.message}</div>
//         </div>
//     )
// }

// const withLogger = (Component) => {
//     return (props) => {
//         console.log(props);
//         return (
//             <div>
//                 <h2>Hello this is new HOC stuff</h2>
//                 <Component {...props} />
//             </div>
//         )
//     }
// }

// export default withLogger(Home)
