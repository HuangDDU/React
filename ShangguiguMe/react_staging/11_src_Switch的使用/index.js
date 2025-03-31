import React from "react"; // 引入React核心库
import ReactDOM from "react-dom/client"; // 引入ReactDOM
import App from "./App"; // 引入APP组件
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
