import React, { Component } from 'react'
// import axios from 'axios'
import List from './component/List'
import Search from './component/Search'

export default class App extends Component {
  render() {
    return (
      <div >
        <div className="container">
          <Search />
          <List/>
        </div>
      </div>
    )
  }
}
