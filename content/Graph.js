import {BarChart} from 'react-native-chart-kit'
import {View} from 'react-native'

export const SingleValue = (props) => {
  try {
    let mColor = [] // 색상 저장용 배열
    const setColor = props.head.map(() => { // 막대 색상 세팅
      mColor.push((opacity = 1) => '#FFFFFF')
    })
    setColor

    const data1 = { // 그래프에 사용할 데이터
      labels : props.head, // 헤더
      datasets : [{
        data : props.data1, // 값
        colors : mColor, // 색상
      }],
    }

    const chartConfig = { // 그래프 설정, 라이브러리 참조
      backgroundGradientFrom: '#8cfffb',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#8cfffb',
      backgroundGradientToOpacity: 0.5,

      color: (opacity = 1) => `#ffffff`,
      decimalPlaces: 1,
    };

  return (
    <View style={{backgroundColor:"#00B4DB", marginLeft:20, marginRight:20, marginBottom:20}}>
      <BarChart
        data={data1}
        width={props.head.length * 100}
        height={300}
        chartConfig={chartConfig}
        fromZero={true}
        showBarTops={true}
        showValuesOnTopOfBars={true}
        withCustomBarColorFromData={true}
        flatColor={true}
      />
    </View>
  )
  
  }catch (error){
    console.log(error)
  }
}

export const DoubleValue = (props) => {
  try {
    let datas = [] // 데이터 재구성 저장용 배열
    let heads = [] // 헤더 재구성 저장용 배열
    let mColor = [] // 색상 저장용 배열
    const setData = props.data1.map((val1, idx) => { // 데이터 재구성
      datas.push(val1) // 1번 데이터 Push
      datas.push(props.data2[idx]) // 2번 데이터 Push
    })
    const setHead = props.head.map((val1, idx) => { // 헤더 재구성, 데이터가 2배로 늘어남에 따라 해더도 2배로 재구성
      if (idx == props.head.length - 1){ // 마지막 순번일 때
        heads.push("Student Average") 
        heads.push(val1) // 기존 해더 추가
      } else {
        heads.push("Student " + val1) // Student + 기존 해더 추가
        heads.push(val1 + " Average") // 기존 해더 + Average 추가
      }
    })
    const setColor = props.head.map(() => { // 색상 재구성 
      mColor.push((opacity = 1) => '#FFFFFF') // 학생 막대 색상, 라이브러리 및 깃허브 참조
      mColor.push((opacity = 1) => '#d3d3d3') // 학급 평균 막대 색상, 라이브러리 및 깃허브 참조
    })
    setHead
    setData
    setColor
    const data1 = { // 그래프에 사용할 데이터
      labels : heads, // 해더
      datasets : [{ 
        data : datas, // 값
        colors : mColor // 색상
      }],
    }

    const chartConfig = { // 그래프 설정, 라이브러리 참조
      backgroundGradientFrom: '#8cfffb',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#8cfffb',
      backgroundGradientToOpacity: 0.5,

      color: (opacity = 1) => `#ffffff`,
      decimalPlaces: 1,
    };

  return (
    <View style={{backgroundColor:"#00B4DB", marginLeft:20, marginRight:20, marginBottom:20}}>
      <BarChart
        data={data1}
        width={heads.length * 100}
        height={300}
        chartConfig={chartConfig}
        fromZero={true}
        showBarTops={true}
        showValuesOnTopOfBars={true}
        withCustomBarColorFromData={true}
        flatColor={true}
      />
    </View>
  )
  
  }catch (error){
    console.log(error)
  }
}