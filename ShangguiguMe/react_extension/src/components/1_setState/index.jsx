import React, { Component } from 'react'

export default class Demo extends Component {

    state = { count: 0 }

    add = () => {
        //对象式的setState
        //1.获取原来的count值
        // const { count } = this.state
        // 2.更新状态
        // this.setState({ count: count + 1 }, () => {
        //     console.log("setState回调输出", this.state.count);
        // })
        // console.log('setState后紧跟的输出', this.state.count);

        // 函数式的setState
        // this.setState( (state, props) => {
        //     console.log(state, props)
        //     return {count:state.count+1}
        // })
        // 简写
        this.setState( state => ({count:state.count+1}))

    }
    render() {
        return (
            <div>
                <div>当前求和为: {this.state.count}</div>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
