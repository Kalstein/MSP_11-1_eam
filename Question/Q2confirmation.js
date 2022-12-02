import { Text, View, Button } from 'react-native';    //2번 문제 확인 화면
import Qstyle from '../styling/Qstyle';

const Q2confirmation = (props) => {
    return(
    <View style ={Qstyle.mainView}>

      <Text style={Qstyle.Qtext}>Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal!.</Text>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q2")         // Q2으로 화면 이동
      }}
    />
    </View>);
}

export default Q2confirmation;