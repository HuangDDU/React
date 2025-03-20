import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    //限制输入属性
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    

    handleKeyUp = (event) => {
        const {keyCode, target} = event // 分别获得当前案件和输入框内的值
        // console.log(keyCode) // 测试按键的编码
        if(keyCode===13){
            // 按下回车后进行按键判断 
            if(target.value.trim()===''){
                alert('输入不能为空')
            }else{
                const todoObj = {id:nanoid(), name:target.value, done:false} // 构造新todo对象,使用nanoid作为唯一标识符(通常是后端提供)
                this.props.addTodo(todoObj) // 调用父组件绑定的函数更新其state
                target.value = '' // 清空输入

            }
            return
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
