import React, { Component } from 'react'
import './index.css'



class Parent extends Component {

	state = { carName: "奔驰c63" }

	changeCar = () => {
		this.setState({ carName: '迈巴赫' }) // 只会在首次修改时调用
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("old: ", this.props, this.state)
		console.log("new: ", nextProps, nextState)
		// return !((this.props == nextProps) && (this.state == nextState)) // 当props和state都不变时不更新（应该进入内部判断值），否则更新
		// 手动比较this.state中所有的键值对
		return !(this.state.carName === nextState.carName)
	}

	render() {
		console.log('Parent---render');
		const { carName } = this.state
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				{this.state.stus}&nbsp;
				<span>我的车名字是：{carName}</span><br />
				<button onClick={this.changeCar}>点我换车</button>
				<Child carName={carName} />
			</div>
		)
	}
}

class Child extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		console.log("old: ", this.props, this.state)
		console.log("new: ", nextProps, nextState)
		return !(this.props.carName === nextProps.carName)
	}

	render() {
		console.log('Child---render');
		return (
			<div className="child">
				<h3>我是Child组件</h3>
				<span>我接到的车是：{this.props.carName}</span>
			</div>
		)
	}

}

export default class Demo extends Component {

	render() {
		return (
			<Parent />
		)
	}
}

