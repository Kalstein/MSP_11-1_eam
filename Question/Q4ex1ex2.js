import { Text, View, Button, TextInput } from 'react-native';
import Qstyle from '../styling/Qstyle';

const Q4ex1ex2 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
    Nice work! Now, what do Elena’s, Karla’s and Faye’s scores add up to?
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q4ex1ex3")
      }}
    />
    </View>);
}

export default Q4ex1ex2;