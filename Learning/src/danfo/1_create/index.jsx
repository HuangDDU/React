import React, { Component } from 'react'
import * as dfd from "danfojs"

export default class Demo extends Component {
    render() {
        // 创建Series
        const s = new dfd.Series([1, 3, 5, undefined, 6, 8])
        console.log("s", s)
        s.print()

        // 创建JSON数据
        const json_data = [{ A: 0.4612, B: 4.28283, C: -1.509, D: -1.1352 },
        { A: 0.5112, B: -0.22863, C: -3.39059, D: 1.1632 },
        { A: 0.6911, B: -0.82863, C: -1.5059, D: 2.1352 },
        { A: 0.4692, B: -1.28863, C: 4.5059, D: 4.1632 }]
        const df = new dfd.DataFrame(json_data)
        console.log("df", df)
        df.print()

        return (
            <div>Demo: 1_create (shown in console)</div>
        )
    }
}
