import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Route, Switch, Redirect } from 'react-router-dom'
import New from './New'
import Message from './Message'

export default class Home extends Component {
	render() {
		// console.log(this.props)
		return (
			<div>
				<h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						{/* 此处使用嵌套路由 */}
						<li>
							<MyNavLink to="/home/news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="/home/message">News</MyNavLink>
						</li>
					</ul>
					{/* 注册路由 */}
					<Switch>
						<Route path="/home/news" component={New} />
						<Route path="/home/message" component={Message} />
						<Redirect to="/home/news" />
					</Switch>
				</div>
			</div>
		)
	}
}
