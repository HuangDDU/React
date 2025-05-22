/* 
	该文件用于汇总所有的reducer为一个总的reducer
*/
import {combineReducers}  from 'redux'
//引入为Count组件服务的reducer
import count from './count'
//引入为Person组件服务的reducer
import persons from './person'

//汇总所有的reducer变为一个总的reducer
export default combineReducers({
    // count: count,
    // persons: persons
    // 简写为
    count,
	persons
})