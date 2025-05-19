import React, { Component } from 'react'
//引入store，用于获取redux中保存状态
import store from '../../redux/store'
//引入actionCreator，专门用于创建action对象
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'


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
        store.dispatch(createIncrementAction(value * 1))

    }

    //减法
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }

    //奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            // 是奇数再相加
            store.dispatch(createIncrementAction(value * 1))
        }
    }

    //异步加，等待1s
    incrementAsync = () => {
        const { value } = this.selectNumber
        // // 组件内部管理异步任务
        // setTimeout(() => {
        //     store.dispatch(createIncrementAction(value * 1))
        // }, 1000) // 1s后再相加

        // redux管理异步任务
        store.dispatch(createIncrementAsyncAction(value * 1, 500))
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
