// 创建外壳组件APP
import React, {Component} from "react";
// 引入Component中的组件
import Hello from "./components/Hello" // 找组件文件夹的index.js作为核心组件
import Welcome from "./components/Welcome/Welcome"; // 找对应文件.js作为核心组件

class App extends Component{
  render(){
    return(
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}

export default App