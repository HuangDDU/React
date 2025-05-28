import React, { Component } from 'react'

// class Demo extends Component {
//     state = {
//         count: 0
//     }

//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//             </div>
//         )
//     }
// }

function Demo() {
    // state初始值设置
    const [count, setCount] = React.useState(0) 

    // state使用
    function add() {
        //setCount(count+1) //简写
        setCount(count => count + 1)
    }

    return (
		<div>
			<h2>当前求和为：{count}</h2>
			<button onClick={add}>点我+1</button>
		</div>
	)
}

export default Demo