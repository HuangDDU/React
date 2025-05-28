import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import root from "../../../index"


// class Demo extends Component {
//     state = {
//         count: 0
//     }

//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000)
//     }

//     unmount = () => {
//         // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//         // React18的组件卸载方式，从src/index.jsx中提取root
//         root.unmount()
//     }

//     componentWillUnmount() {
//         // 组件卸载时要清除定时器
//         clearInterval(this.timer)
//     }
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>

//             </div>
//         )
//     }
// }

function Demo() {
    // 初始值设置
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        // componentDidMount
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        // componentWillUnmount
        return () => {
            clearInterval(timer)
        }
    }, [] // 对特定组件的Update
    )

    function add() {
        //setCount(count+1) //简写
        setCount(count => count + 1)
    }

    function unmount() {
        // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        root.unmount()
    }

    return (
        <div>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>

        </div>
    )
}

export default Demo