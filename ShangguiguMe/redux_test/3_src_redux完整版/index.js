import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 整体调用, 订阅redux中的状态变化, 每次store中state发生变化都会调用render重新渲染, 内部调用Diffing算法加速
store.subscribe(()=>{
  root.render(<App/>,document.getElementById('root'))
})