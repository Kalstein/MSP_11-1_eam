import { Text, View, Button } from 'react-native';
import Qstyle from '../styling/Qstyle';

const Q1confirmation = (props) => {
    return(
    <View style = {Qstyle.mainView}>

      <Text style={Qstyle.Qtext}>Ok! If you’re 
right, then Todd
bought 11 pictures.</Text>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q1")
      }}
    />
    </View>);
}

export default Q1confirmation;