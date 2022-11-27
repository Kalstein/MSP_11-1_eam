import { StyleSheet, View, ScrollView, Text } from 'react-native';
import {useState} from 'react';
import Data from './Data';
import { Picker } from '@react-native-picker/picker';
import { SingleValue, DoubleValue } from './Test'

const Student = (props) => {
  const [name, setName] = useState(Data.bodyDatas[0][0]);

  const datas = [Data.bodyDatas[serch(name)][Data.bodyDatas[0].length - 1], Data.tails[Data.tails.length-1]]
  const data1 = Data.bodyDatas[serch(name)].slice(1,Data.bodyDatas[0].length)

  let names = []
  for (let i = 0; i < Data.bodyDatas.length; i++){
    names.splice(i, 0, Data.bodyDatas[i][0])
  }

  const heada = (Data.heads.slice(1, Data.heads.length-1))
  heada.push('전체평균')

  return (
    <ScrollView>
      <View style={styles.containor}>
        <Text style={styles.textleft}>{Data.teacherInformation[0]}</Text>
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
      <DoubleValue head={heada} data1={data1} data2={Data.tails.slice(1,Data.tails.length)}></DoubleValue>
    </ScrollView>
  )
}

const serch = (name) => {
  for (let i = 0; i < Data.bodyDatas.length; i++){
    if(Data.bodyDatas[i][0] === name){
      return i;
    }
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