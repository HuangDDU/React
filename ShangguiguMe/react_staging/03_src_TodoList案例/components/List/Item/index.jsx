import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	state = { mouse: false } // 识别鼠标移入移出

	handleMouse = (flag) => {
		return () => {
			this.setState({ mouse: flag })
		}
	}
	
	handleCheck = (id) => {
		return (event) => {
			this.props.updateTodo(id, event.target.checked)
		}
	}

	handleDelete = (id) => {
		// console.log("通知App删除", id)
		if(window.confirm("确认删除嘛?")){
			this.props.deleteTodo(id)
		}
	} // 不用高阶函数


	render() {
		const { id, name, done } = this.props // 条目对象
		const { mouse } = this.state // 鼠标移入移除效果
		return (
			<li style={{ backgroundColor: mouse ? "#ddd" : "white" }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
					<span>{name}</span>
				</label>
				<button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? "block" : 'none' }}>删除</button>
			</li>
		)
	}
}
