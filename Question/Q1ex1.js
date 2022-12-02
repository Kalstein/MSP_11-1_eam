import { Text, View, Button, TextInput } from 'react-native';   //A방식-1 화면
import Qstyle from '../styling/Qstyle';

const Q1ex1 = (props) => {
    return(
    <View style = {Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
      OK. Using p to represent the number of pictures, 
      write an equation that represents how p, $7.50 per picture, and the $3.25 shipping fee combine to make $85.75
    </Text>
    <TextInput style = {Qstyle.input}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q1exex1")                  //A방식 정답 입력 화면으로 이동
      }}
    />
    </View>);
}

export default Q1ex1;

