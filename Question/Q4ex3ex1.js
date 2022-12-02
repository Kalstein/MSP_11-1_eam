import { Text, View, Button, TextInput } from 'react-native';   //C방식-2 화면
import Qstyle from '../styling/Qstyle';

const Q4ex3ex1 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
    Ok, so the four bars represent 84 points. Then how many points did Elena score?
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q4ex3ex2")
      }}
    />
    </View>);
}

export default Q4ex3ex1;