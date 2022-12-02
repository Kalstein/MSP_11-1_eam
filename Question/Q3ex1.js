import { Text, View, Button, TextInput } from 'react-native';   //A방식-1 화면
import Qstyle from '../styling/Qstyle';

const Q3ex1 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
    Let’s subtract the extra fabric. How much did Jennifer use for 6 curtains?
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q3ex1ex1")
      }}
    />
    </View>);
}

export default Q3ex1;