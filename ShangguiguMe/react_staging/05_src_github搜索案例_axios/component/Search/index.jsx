import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

	search = () => {
		const { keyWordElement: { value: keyWord } } = this // 用户输入，连续解构赋值
		this.props.updateAppState({ isFirst: false, isLoading: true }) // 通知App更新状态
		// 发送网络请求
		axios.get('/api1/search/users?q=' + keyWord).then(
			response => {
				// 请求成功后通知App更新状态
				console.log("成功了", response.data)
				this.props.updateAppState({ isLoading: false, users: response.data.items })
			},
			error => {
				// 请求失败后通知App更新状态
				console.log("失败了", error.message)
				this.props.updateAppState({ isLoading: false, err: error.message })
			}
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索Github用户</h3>
				<div>
					<input ref={(c) => { this.keyWordElement = c }} type="text" placeholder="输入搜索关键词" />&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
