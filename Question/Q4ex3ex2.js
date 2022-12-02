import { Text, View, Button, TextInput } from 'react-native';   //C방식-3 화면
import Qstyle from '../styling/Qstyle';

const Q4ex3ex2 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
    That seems correct. So then, how many points did Karla and Faye score?
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q4ex3ex3")
      }}
    />
    </View>);
}

export default Q4ex3ex2;