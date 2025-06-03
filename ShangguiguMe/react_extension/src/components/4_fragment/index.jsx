import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
    render() {
        return (
            // // Fragment只能添加属性key
            <Fragment key={1}>
                <input type="text" />
                <input type="text" />
            </Fragment>
            // 空标签不能添加属性，会在父标签中直接展开
            // <>
            //     <input type="text" />
            //     <input type="text" />
            // </>
        )
    }
}
