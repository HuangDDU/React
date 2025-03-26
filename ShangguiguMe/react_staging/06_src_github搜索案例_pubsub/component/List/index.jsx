import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
	state = {
		users: [], // users
		isFirst: true, // if it is the first time to open the page
		isLoading: false, // loading
		err: '' // error message
	}

	componentDidMount() {
		console.log("订阅消息 github_search")
		this.token = PubSub.subscribe('github_search', (_, stateObj) => {
			this.setState(stateObj)
		})
	}

	componentWillUnmount() {
		console.log("解除订阅 github_search")
		PubSub.unsubscribe(this.token)

	}
	render() {
		const { users, isFirst, isLoading, err } = this.state
		return (
			<div className="row">
				{
					isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
						isLoading ? <h2>Loading......</h2> :
							err ? <h2 style={{ color: 'red' }}>{err}</h2> :
								users.map((userObj) => {
									return (
										<div key={userObj.id} className="card">
											<a href={userObj.html_url} target="_blank" rel="noreferrer">
												<img src={userObj.avatar_url} alt="avater" style={{ width: '100px' }} />
											</a>
											<p className="card-text">reactjs</p>
										</div>
									)
								})
				}


			</div>
		)
	}
}
