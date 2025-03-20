import React, { Component } from "react";
import hello from "./index.module.css" // 导入css为模块，使用样式模块化

class Hello extends Component {
	render() {
		return <h2 className={hello.title}>Hello, React</h2>
	}
}

export default Hello