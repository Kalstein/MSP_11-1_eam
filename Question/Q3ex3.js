import { Text, View, Button, TextInput } from 'react-native';
import Qstyle from '../styling/Qstyle';

const Q3ex3 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
    The shorter rectangles are the curtains. The longer one is the left over fabric. How long is the longer rectangle?
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q3ex3ex1")
      }}
    />
    </View>);
}

export default Q3ex3;