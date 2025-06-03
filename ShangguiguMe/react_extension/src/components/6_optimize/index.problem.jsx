import React, { Component } from 'react'
import './index.css'



class Parent extends Component {

	state = { carName: "奔驰c63" }

	changeCar = () => {
		this.setState({ carName: '迈巴赫' }) 
		// 希望只会在首次修改时肯定会重新调用父子render, 再次修改时，内容不变，不应该调用，但是实际还是调用了.
		// Diffing算法不应该重新调用父子render，但是实际还是调用了，这是由于Diffing算法需要指定元素的key进行比较
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

