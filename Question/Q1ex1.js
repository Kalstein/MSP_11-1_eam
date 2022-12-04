import { Text, View, Button, TextInput } from 'react-native';
import Qstyle from '../styling/Qstyle';

const Q1ex1 = (props) => {
    return(
    <View style = {Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
      OK. Using p to represent the number of pictures, write an equation that represents how p, $7.50 per picture, and the $3.25 shipping fee combine to make $85.75
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q1exex1")
      }}
    />
    </View>);
}

export default Q1ex1;