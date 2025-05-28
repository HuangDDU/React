import React, { Component } from 'react'

// class Demo extends Component {
//     myRef = React.createRef()
//     show = () => {
//         alert(this.myRef.current.value)
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <button onClick={this.show}>点击提示数据</button>
//             </div>
//         )
//     }
// }

function Demo() {
    const myRef = React.useRef()

    //提示输入的回调
    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <button onClick={show}>点我提示数据</button>

        </div>
    )
}

export default Demo