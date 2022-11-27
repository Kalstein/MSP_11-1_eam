import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
} from "recharts";

export const DoubleValue = (props) => {
  const data = props.head.map((head, idx, val1, val2)=>{
    val1 = props.data1[idx]
    val2 = props.data2[idx]

    return {
        name : head,
        aver : val1,
        total : val2
    }
  })

  return (
    <ResponsiveContainer width={data.length * 100} height="30%" aspect={2.5}>
      <BarChart
        width={"100%"}
        height={"100%"}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="aver" fill="#8884d8">
          <LabelList dataKey="aver" position="top" />
        </Bar>
        <Bar dataKey="total" fill="#82ca9d">
          <LabelList dataKey="total" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export const SingleValue = (props) => {
  const data = props.head.map((head, idx, val1)=>{
    val1 = props.data1[idx]

    return {
        name : head,
        aver : val1
    }
  })

  return (
    <ResponsiveContainer width={data.length * 100} height="30%" >
      <BarChart 
        width={"100%"}
        height={"100%"} 
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="aver" fill="#8884d8">
          <LabelList dataKey="aver" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}