// 메인 탭
import Tables from "./Tables"
import { ScrollView, View, StyleSheet, Text, Alert } from "react-native";
import { SingleValue } from './Graph'
import { readfromStudentDB} from './FireBase';
import React, {useEffect} from 'react';

// props.head : ['이름', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', '합']
// props.body : [['(이름)', '', '', '', '', '', '', '', '', ''], ...]
// props.tail : ['평균', "", "", "", "", "", "", "", "", ""]
// props.teacherClass : (학급)
// props.teacherName : (이름)
const Statistics = (props) => {
  try{
    const head = props.head
    let body
    const tail = props.tail

    const heada = (head.slice(1, head.length-1)) // head[1 ~ last-1]
    heada.push('Total Average') // 끝에 '전체평균' 추가

    useEffect(() => {
      const data = props.teacherClass && readfromStudentDB(props.teacherClass) // teacherClass가 비어있지 않을 때 실행
      data && data.then((arrays) => { // data가 비어있지 않을 때 실행
        body = arrays
        props.setBody(body);
      })
    }, []);

    if (props.body.length == 0) return Alert.alert("데이터가 없습니다.")
    else { // body 데이터가 있을 때
      let sum

      for (let i = 1; i < tail.length; i++){ // body 데이터를 기반으로 tail에 평균 값을 대입
        sum = 0;
        for (let j = 0; j < props.body.length; j++){
          sum += Number(props.body[j][i]);
        }
  
        tail[i] = parseFloat((sum / props.body.length).toFixed(2)); // 정수 or 소수점 2자리까지
      }
    }

    return (
      <ScrollView>
          <View style={styles.containor}>
            <Text style={styles.textleft}>{"Class " + props.teacherClass}</Text>
            <Text style={styles.textRight}>{props.teacherName}</Text>
          </View>
          <ScrollView horizontal={true}>
            <Tables head={head} bodyData={props.body} tail={tail}/>
          </ScrollView>
          <ScrollView horizontal={true}>
            <SingleValue head={heada} data1={tail.slice(1,tail.length)}/>
          </ScrollView>
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