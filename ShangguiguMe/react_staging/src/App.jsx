import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  // 初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: false },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '运动', done: true },
    ],
  }


  // 添加一个todo对象
  addTodo = (todoObj) => {
    const { todos } = this.state // 原TODO对象
    const newTodos = [todoObj, ...todos] // 在开头添加TODO对象
    this.setState({ todos: newTodos }) // 更新状态
  }

  // 更新一个todo的完成状态
  updateTodo = (id, done) => {
    const { todos } = this.state // 原TODO对象
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done }; // 找到对应条目, 修改todo
      } else {
        return todoObj
      }
    })
    this.setState({ todos: newTodos })
  }

  // 删除一个todo对象
  deleteTodo = (id) => {
    const { todos } = this.state // 原TODO对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    }) // 过滤掉指定id的todo对象
    this.setState({ todos: newTodos })
  }

  // 全选或全不选
  checkAllTodo = (done) => {
    const { todos } = this.state // 原TODO对象
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done }
    }) // 修改done属性
    this.setState({ todos: newTodos })
  }

  // 清除所有已完成
  clearAllDone = () => {
    const { todos } = this.state // 原TODO对象
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    }) // 过滤掉已完成的todo对象
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
