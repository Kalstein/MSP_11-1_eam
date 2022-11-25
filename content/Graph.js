// https://www.npmjs.com/package/react-native-chart-kit

import { BarChart } from "react-native-chart-kit";

const Graph = (props) => {
  const data = {
    labels: props.head,
    datasets: [
      {
        data: props.data,
      }
    ]
  };
  
  return (
    <BarChart
      data={data}
      width={props.data.length*95}
      height={220}
      yAxisLabel=""
      fromZero='true'
      showValuesOnTopOfBars	='true'
      chartConfig={{
        backgroundColor: "#efefef",
        backgroundGradientFrom: "#efefef",
        backgroundGradientTo: "#efefef",
        //decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // 막대 색상
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
    />
  )
}

export default Graph;