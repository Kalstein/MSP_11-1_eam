import { Text, View, Button, TextInput } from 'react-native';   //C방식-2 화면
import Qstyle from '../styling/Qstyle';

const Q3ex3ex1 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
    Great job! Can you find out how long all 6 of the shorter rectangles are combined?
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q3ex3ex2")
      }}
    />
    </View>);
}

export default Q3ex3ex1;