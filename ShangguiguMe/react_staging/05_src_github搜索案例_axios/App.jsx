import React, { Component } from 'react'
// import axios from 'axios'
import List from './component/List'
import Search from './component/Search'

export default class App extends Component {
  state = {
    users: [], // users
    isFirst: true, // if it is the first time to open the page
    isLoading: false, // loading
    err: '' // error message
  }

  // 更新App的state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div >
        <div className="container">
          <Search updateAppState={this.updateAppState} />
          <List {...this.state} />
        </div>
      </div>
    )
  }
}
