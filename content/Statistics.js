// 통계화면
import Tables from "./Tables"
import { ScrollView, View, StyleSheet, Text, Alert } from "react-native";
import { SingleValue } from './Graph'
import { readfromStudentDB} from './FireBase';
import React, {useEffect} from 'react';

const Statistics = (props) => {
  try{
    const head = props.head
    let body
    const tail = props.tail

    const heada = (head.slice(1, head.length-1))
    heada.push('전체평균')

    useEffect(() => {
      const data = props.teacherClass && readfromStudentDB(props.teacherClass)
      data && data.then((arrays) => {
        body = arrays
        props.setBody(body);
      })
    }, [props.teacherClass]);

    let sum

    for (let i = 1; i < tail.length; i++){
      sum = 0;
      for (let j = 0; j < props.body.length; j++){
        sum += Number(props.body[j][i]);
      }

      tail[i] = parseFloat((sum / props.body.length).toFixed(2));
    }

    if (props.body.length == 0) return Alert.alert("데이터가 없습니다.")

    return (
      <ScrollView>
          <View style={styles.containor}>
            <Text style={styles.textleft}>{props.teacherClass}</Text>
            <Text style={styles.textRight}>{props.teacherName}</Text>
          </View>
          <ScrollView >
            <Tables head={head} bodyData={props.body} tail={tail}></Tables>
          </ScrollView>
          <SingleValue head={heada} data1={tail.slice(1,tail.length)}></SingleValue>
      </ScrollView>
    )
  } catch(error){
    console.log(error)
  }
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

// const ttd = [
//   ['홍길동', 3, 1, 2, 3, 0, 1, 0, 1, 9],
//   ['주찬환', 2, 3, 1, 1, 0, 2, 0, 2, 8]
// ]