import React, { Component } from 'react'
//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'


// UI组件
class Count extends Component {

	//加法
	increment = () => {
		const { value } = this.selectNumber
		this.props.jia(value * 1)
	}
	//减法
	decrement = () => {
		const { value } = this.selectNumber
		this.props.jian(value * 1)
	}
	//奇数再加
	incrementIfOdd = () => {
		const { value } = this.selectNumber
		if (this.props.count % 2 !== 0) {
			this.props.jia(value * 1)
		}
	}
	//异步加
	incrementAsync = () => {
		const { value } = this.selectNumber
		this.props.jiaAsync(value * 1, 500)
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<h1>当前求和为：{this.props.count} </h1>
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


// 容器组件
export default connect(
	//mapDispatchToProps的一般写法
	state => ({ count: state }),
	//mapDispatchToProps的简写
	{
		jia: createIncrementAction,
		jian: createDecrementAction,
		jiaAsync: createIncrementAsyncAction,
	}
)(Count)

