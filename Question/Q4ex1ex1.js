import { Text, View, Button, TextInput } from 'react-native';   //A방식-2 화면
import Qstyle from '../styling/Qstyle';

const Q4ex1ex1 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
    Ok, you guessed [x] points for Elena. Then how many would Karla and Faye win?
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q4ex1ex2")
      }}
    />
    </View>);
}

export default Q4ex1ex1;