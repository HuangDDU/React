import React, { Component, PureComponent } from 'react'
import './index.css'



class Parent extends PureComponent {

	state = { carName: "奔驰c63", stus:['小张','小李','小王']}
	addStu = ()=>{
		// 正确: 推荐的列表添加元素写法
		const {stus} = this.state
		this.setState({stus:['小刘',...stus]})

		// 错误: 不推荐的列表添加元素写法
		// const {stus} = this.state
		// stus.unshift('小刘')
		// this.setState({stus})
	}

	changeCar = () => {
		// 正确: 会修改state对象的指针,会调用render
		this.setState({ carName: '迈巴赫' }) // 只会在首次修改时调用render

		// 错误: 并不修改state对象的指针,只修改器内容,不会调用render,不推荐这样使用
		// const obj = this.state
		// obj.carName = '迈巴赫'
		// console.log(obj === this.state);
		// this.setState(obj)
	}

	render() {
		console.log('Parent---render');
		const { carName } = this.state
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				{this.state.stus}&nbsp;
				<span>我的车名字是：{carName}</span><br/>
				<button onClick={this.changeCar}>点我换车</button>
				<button onClick={this.addStu}>添加一个小刘</button>
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

export default class Demo extends PureComponent {

	render() {
		return (
			<Parent />
		)
	}
}

