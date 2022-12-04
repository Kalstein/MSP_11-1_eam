// 학생 탭
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import {useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { SingleValue, DoubleValue } from './Graph'

// props.head : ['이름', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', '합']
// props.body : [['(이름)', '', '', '', '', '', '', '', '', ''], ...]
// props.tail : ['평균', "", "", "", "", "", "", "", "", ""]
// props.teacherClass : (학급)
const Student = (props) => {
  try{
    // 전달받은 이름과 같은 이름의 학생이 들어있는 배열 순번 반환
    const serch = (name) => {
      for (let i = 0; i < props.body.length; i++){
        if(props.body[i][0] === name){
          return i;
        }
      }
    }
    
    const [name, setName] = useState(props.body[0][0]); // Picker에 선택된 이름

    const datas = [props.body[serch(name)][props.body[0].length - 1], props.tail[props.tail.length-1]] // [학생 총점, 전체 평균]
    const data1 = props.body[serch(name)].slice(1,props.body[0].length) // [Picker에 선택된 학생 정보(이름 부분 제외)]
    const data2 = props.tail.slice(1,props.tail.length) // [tail에서 '평균'부분 제외]

    let names = [] // Picker에 사용할 이름 목록
    for (let i = 0; i < props.body.length; i++){
      names.push(props.body[i][0])
    }

    const heada = (props.head.slice(1, props.head.length-1))
    heada.push('Total Average')

    return (
      <ScrollView>
        <View style={styles.containor}>
          <Text style={styles.textleft}>{"Class " + props.teacherClass}</Text>
          <Picker style={styles.Picker} selectedValue={name} onValueChange={(val, idx) => setName(val)}>
            {
              names.map((name, idx) => (
                <Picker.Item key={idx} label={name} value={name} />
              ))
            } 
          </Picker>
        </View>
        <ScrollView horizontal={true}>
          <SingleValue head={["Score", "Total Average"]} data1={datas}/>
        </ScrollView>
        <ScrollView horizontal={true}>
          <DoubleValue head={heada} data1={data1} data2={data2}/>
        </ScrollView>
      </ScrollView>
    )
  } catch(error){
    console.log(error)
  }
}

const styles = StyleSheet.create({
  containor: {
      flexDirection:"row"
  },
  textleft: { 
    textAlign: 'left',
    textAlignVertical: 'top',
    fontSize: 20,
    padding:10,
    flex:1,
    margin:10,
  },
  Picker: {
    width:'40%',
    textAlignVertical:'center',
    margin:10,
  },
});

export default Student;