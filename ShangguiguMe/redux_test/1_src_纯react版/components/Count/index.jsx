import React, { Component } from 'react'

export default class Count extends Component {

    state = { count: 0 }

    //加法
    increment = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({ count: count + value * 1 }) // 将字符串转换为数字再相加
    }

    //减法
    decrement = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({ count: count - value * 1 })
    }

    //奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        if (count % 2 !== 0) {
            // 是奇数再相加
            this.setState({ count: count + value * 1 })
        }
    }

    //异步加，等待1s
    incrementAsync = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        setTimeout(() => {
            this.setState({ count: count + value * 1 })
        }, 1000) // 1s后再相加
    }


    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
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
