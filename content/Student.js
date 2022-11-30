import { StyleSheet, View, ScrollView, Text } from 'react-native';
import {useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { SingleValue, DoubleValue } from './Graph'

const Student = (props) => {
  try{
    const serch = (name) => {
      for (let i = 0; i < props.body.length; i++){
        if(props.body[i][0] === name){
          return i;
        }
      }
    }
    
    const [name, setName] = useState(props.body[0][0]);

    const datas = [props.body[serch(name)][props.body[0].length - 1], props.tail[props.tail.length-1]]
    const data1 = props.body[serch(name)].slice(1,props.body[0].length)

    let names = []
    for (let i = 0; i < props.body.length; i++){
      names.splice(i, 0, props.body[i][0])
    }

    const heada = (props.head.slice(1, props.head.length-1))
    heada.push('전체평균')

    return (
      <ScrollView>
        <View style={styles.containor}>
          <Text style={styles.textleft}>{props.teacherClass}</Text>
          <Text style={styles.textRight}>{name}</Text>
        </View>
        <Picker style={styles.Picker} onValueChange={(val, idx) => setName(val)}>
        {
          names.map((name, idx) => (
            <Picker.Item key={idx} label={name} value={name} />
          ))
        } 
        </Picker>
        <SingleValue head={["합", "전체평균"]} data1={datas}></SingleValue>
        <DoubleValue head={heada} data1={data1} data2={props.tail.slice(1,props.tail.length)}></DoubleValue>
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
  Picker: {
    width:'30%',
    paddingTop: 20,
    marginLeft:20,
    marginBottom:20,
    alignItems: 'left',
    textAlignVertical:'center',
  },
});

export default Student;