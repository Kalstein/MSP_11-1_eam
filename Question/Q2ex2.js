import { Text, View, Button, TextInput } from 'react-native';   //B방식-1 화면
import Qstyle from '../styling/Qstyle';

const Q2ex2 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style={Qstyle.Qtext}>
    What equation will represent the situation? Use the letter “m” as your vairable.
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q2ex2ex1")
      }}
    />
    </View>);
}

export default Q2ex2;