import { Text, View, Button, TextInput } from 'react-native';     //A방식-1 화면
import Qstyle from '../styling/Qstyle';

const Q2ex1 = (props) => {
    return(
    <View style ={Qstyle.mainView}>

    
    <Text style={Qstyle.Qtext}>
    Let’s add up Jen’s total from Monday through Thursday. How many miles has she run?
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q2ex1ex1")               //A방식 정답 입력 화면으로 이동
      }}
    />
    </View>);
}

export default Q2ex1;