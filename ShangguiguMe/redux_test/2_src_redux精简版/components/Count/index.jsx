import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {

    state = { count: 0 }

    // // 大量组件都需要这样做时候,放在最外层
    // componentDidMount() {
    //     //检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    //加法
    increment = () => {
        const { value } = this.selectNumber
        store.dispatch({ type: 'increment', data: value * 1 })
    }

    //减法
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch({ type: 'decrement', data: value * 1 })
    }

    //奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            // 是奇数再相加
            store.dispatch({ type: 'increment', data: value * 1 })
        }
    }

    //异步加，等待1s
    incrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch({ type: 'increment', data: value * 1 })

        }, 1000) // 1s后再相加
    }


    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
