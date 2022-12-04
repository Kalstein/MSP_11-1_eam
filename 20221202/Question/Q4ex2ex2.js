import { Text, View, Button, TextInput } from 'react-native';
import Qstyle from '../styling/Qstyle';

const Q4ex2ex2 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
    Ok, Elena scored 21 points. Then how many points did Karla and Faye score?
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q4ex2ex3")
      }}
    />
    </View>);
}

export default Q4ex2ex2;