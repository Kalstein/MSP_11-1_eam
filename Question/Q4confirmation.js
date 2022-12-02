import { Text, View, Button } from 'react-native';    //4번 문제 확인 화면
import Qstyle from '../styling/Qstyle';

const Q4confirmation = (props) => {
    return(
    <View style ={Qstyle.mainView}>

      <Text style={Qstyle.Qtext}>Ok! It looks like Faye scored the most.</Text>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q4")
      }}
    />
    </View>);
}

export default Q4confirmation;