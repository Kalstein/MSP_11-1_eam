import Button from '../Button';
import { Text, View} from 'react-native';
import Qstyle from '../styling/Qstyle';

const Q3 = (props) => {
    return(
    <View style ={Qstyle.mainView}>
      <Text style={Qstyle.Qtext}>Jennifer has 84.5 yards of fabric to make curtains. 
        She makes 6 identical curtains and has 19.7 yards of fabric remaining. 
        How many yards of fabric does Jennifer use per curtain?
      </Text>
      
      <Text style={Qstyle.subView}>Which strategy do you want to try?</Text>
      <Button
        title="Subtract the extra yards and then figure out how much fabric she used for each curtain"
        onPress={()=>{
            props.navigation.navigate("Q3ex1")
        }}
      />

      <Button
        title="Write an equation to solve it."
        onPress={()=>{
            props.navigation.navigate("Q3ex2")
        }} 
      />

      <Button
        title="Use a diagram to try and understand the problem."
        onPress={()=>{
            props.navigation.navigate("Q3ex3")
        }} 
      />      

        <Button
        title="Next"
        onPress={()=>{
            props.navigation.navigate("Q3estimation")
        }} 
      />
    </View>);
}



export default Q3;