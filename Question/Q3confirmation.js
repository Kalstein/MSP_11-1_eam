import { Text, View, Button, TextInput } from 'react-native';
import Qstyle from '../styling/Qstyle';

const Q3confirmation = (props) => {
    return(
    <View style ={Qstyle.mainView}>

      <Text style={Qstyle.Qtext}>Nice! Jennifer used 10.8 yards of fabric for each curtain. Let’s try a different method!</Text>
    <Button
      title="Next?"
      onPress={()=>{
          props.navigation.navigate("Q3")
      }}
    />
    </View>);
}

export default Q3confirmation;