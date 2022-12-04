import { Text, View, Button, TextInput } from 'react-native';
import Qstyle from '../styling/Qstyle';

const Q4ex2ex1 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
    Great! That equation looks good. Now, solve for e and enter your answer.
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q4ex2ex2")
      }}
    />
    </View>);
}

export default Q4ex2ex1;