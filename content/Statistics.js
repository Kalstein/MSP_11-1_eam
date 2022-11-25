// 통계화면
import Tables from "./Tables"
import { ScrollView, View, StyleSheet, Text } from "react-native";
import Graph from './Graph';
import Data from './Data';

const Statistics = () => {
  const heada = (Data.heads.slice(1, Data.heads.length-1))
  heada.push('전체평균')

  return (
      <ScrollView>
          <View style={styles.containor}>
            <Text style={styles.textleft}>{Data.teacherInformation[0]}</Text>
            <Text style={styles.textRight}>{Data.teacherInformation[1]}</Text>
          </View>
          <Tables></Tables>
          <Graph head={heada} data={Data.tails.slice(1,Data.tails.length)}></Graph>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'gray',
      marginHorizontal: 20,
    },
    containor: {
      flexDirection:"row"
    },
    textleft: { 
      textAlign: 'left',
      textAlignVertical: 'top',
      fontSize: 20,
      padding:20,
      flex:1,
    },
    textRight: { 
      textAlign: 'right',
      textAlignVertical: 'top',
      fontSize: 20,
      padding:20,
      flex:1,
    },
  });

export default Statistics;