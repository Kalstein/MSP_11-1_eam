import { Text, View, Button } from 'react-native';
import Qstyle from '../styling/Qstyle';

const Q2confirmation = (props) => {
    return(
    <View style ={Qstyle.mainView}>

      <Text style={Qstyle.Qtext}>Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal!.</Text>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q2")
      }}
    />
    </View>);
}

export default Q2confirmation;