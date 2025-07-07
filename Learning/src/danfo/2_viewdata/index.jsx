import React, { Component } from 'react'
import * as dfd from "danfojs"

export default class Demo extends Component {
    render() {
        console.log("==============================show index, column==============================")
        // 构造日期列
        const dates = new dfd.dateRange({
            start: "2017-01-01",
            end: "2020-01-01",
            period: 4,
            freq: "Y",
        });

        const obj_data = {
            A: dates, // 使用日期列
            B: ["bval1", "bval2", "bval3", "bval4"],
            C: [10, 20, 30, 40],
            D: [1.2, 3.45, 60.1, 45],
            E: ["test", "train", "test", "train"],
        };
        const df = new dfd.DataFrame(obj_data);
        // 查看表格整体
        df.print();
        // 查看表格行列
        console.log(df.index);
        console.log(df.columns);

        console.log("==============================tensor transfer==============================")

        const json_data = [{ A: 0.4612, B: 4.28283, C: -1.509, D: -1.1352 },
        { A: 0.5112, B: -0.22863, C: -3.39059, D: 1.1632 },
        { A: 0.6911, B: -0.82863, C: -1.5059, D: 2.1352 },
        { A: 0.4692, B: -1.28863, C: 4.5059, D: 4.1632 }]
        const df2 = new dfd.DataFrame(json_data)
        console.log(df2.tensor); // tensor展示
        df2.tensor.print()

        console.log("==============================describe ==============================")
        df2.describe().print() // 展示数据列属性，数量、均值、方差等

        console.log("==============================sort by C==============================")
        let data = {
            "A": [-20, 30, 47.3, NaN],
            "B": [34, -4, 5, 6],
            "C": [20, 2, 3, 30]
        }
        const df4 = new dfd.DataFrame(data)
        df4.sortValues("C", { inplace: true }) // 按照C值排序
        df4.print()

        return (
            <div>Demo: 2_viewdata (shown in console)</div>
        )
    }
}
