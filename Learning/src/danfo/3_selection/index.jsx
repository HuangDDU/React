import React, { Component } from 'react'
import * as dfd from "danfojs"

export default class Demo extends Component {
    render() {
        console.log("==============================Getting==============================")

        const json_data = [{ A: 0.4612, B: 4.28283, C: -1.509, D: -1.1352 },
        { A: 0.5112, B: -0.22863, C: -3.39059, D: 1.1632 },
        { A: 0.6911, B: -0.82863, C: -1.5059, D: 2.1352 },
        { A: 0.4692, B: -1.28863, C: 4.5059, D: 4.1632 }]

        const df = new dfd.DataFrame(json_data)
        df['A'].print() // 提取单列

        // 使用标签提取
        console.log("==============================Selection by label==============================")
        const data = {
            "Name": ["Apples", "Mango", "Banana", "Pear"],
            "Count": [21, 5, 30, 10],
            "Price": [200, 300, 40, 250]
        }

        const df2 = new dfd.DataFrame(data, { index: ["a", "b", "c", "d"] }) // 只是用行索引
        df2.print()

        console.log("*****For getting a cross-section using a label:*****")
        const sub_df = df2.loc({ rows: ["a", "c"] })
        sub_df.print()

        console.log("*****Selecting on a multi-axis by label:*****")
        const df3 = new dfd.DataFrame(data)
        df3.print()
        const sub_df2 = df3.loc({ rows: [0, 1], columns: ["Name", "Price"] }) // 同时使用行列索引
        sub_df2.print()

        console.log("*****Showing label slicing:*****")
        const sub_df3 = df3.loc({ rows: ["0:2"], columns: ["Name", "Price"] }) // 切片
        sub_df3.print()

        // 使用位置提取
        console.log("==============================Selection by position==============================")
        console.log("*****Select via the position of the passed integers:*****")
        const sub_df4 = df3.iloc({ rows: df3["Count"].gt(10) }) // 找到Count为10对应的行，使用到了mask
        sub_df4.print()

        console.log("*****By integer slices:*****")
        const sub_df5 = df3.iloc({ rows: ["1:3"] }) // 整数切片，从1开始
        sub_df5.print()

        console.log("*****By lists of integer position locations:*****")
        const sub_df6 = df3.iloc({ rows: [1, 3], columns: [0, 2] }) // 指定行列序号
        sub_df6.print()

        console.log("*****For slicing rows explicitly:*****")
        let sub_df7 = df3.iloc({ rows: ["2:3"], columns: [":"] }) // 获取整行
        sub_df7.print()

        console.log("*****For slicing columns explicitly:*****")
        let sub_df8 = df.iloc({ rows: [":"], columns: ["1:2"] }) // 获取整列
        sub_df8.print()


        // 使用布尔Mask
        console.log("==============================Selection with Boolean Mask==============================")
        console.log("*****Select Count>10*****")
        console.log(df3["Count"].gt(10).$data)
        sub_df4.print()

        console.log("*****Count>10 and Name=Apples*****")
        const sub_df9 = df3.iloc({
            rows: df3["Count"].gt(10).and(df3["Name"].eq("Apples")),
            columns: [0]
        })
        sub_df9.print()

        // 布尔过滤
        console.log("==============================Boolean Querying/Filtering==============================")
        const data2 = {
            "A": ["Ng", "Yu", "Mo", "Ng"],
            "B": [34, 4, 5, 6],
            "C": [20, 20, 30, 40]
        }
        const df5 = new dfd.DataFrame(data2)
        const query_df = df5.query(df5["B"].gt(5))
        query_df.print()

        const query_df2 = df5.query(df["B"].gt(5).and(df["C"].lt(0)))
        query_df2.print()

        // 布尔过滤
        console.log("==============================Adding a new column==============================")

        const data3 = {
            "A": [30, 1, 2, 3],
            "B": [34, 4, 5, 6],
            "C": [20, 20, 30, 40]
        }
        const df6 = new dfd.DataFrame(data3)
        df6.print()
        const new_col = [1, 2, 3, 4]
        df6.addColumn("D", new_col, { inplace: true }); //happens inplace
        df6.print()

        return (
            <div>Demo: 3_selection (shown in console)</div>
        )
    }
}
