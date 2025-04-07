import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
import { WechatOutlined, WeiboOutlined, SearchOutlined } from '@ant-design/icons'
const { RangePicker } = DatePicker;


export default class App extends Component {
  render() {
    return (
      <div >
        组件 <br />
        <button>普通按钮</button> <br />
        <Button type="primary">Ant Desing按钮</Button> <br />
        <DatePicker /> <br />
        <RangePicker /> <br />
        <hr />
        图标 <br />
        <WechatOutlined />
        <WeiboOutlined />
        <SearchOutlined />
      </div>
    )
  }
}
