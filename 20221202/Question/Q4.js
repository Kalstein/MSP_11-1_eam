import Button from '../Button';
import { Text, View} from 'react-native';
import Qstyle from '../styling/Qstyle';

const Q4 = (props) => {
    return(
    <View style ={Qstyle.mainView}>
      <Text style={Qstyle.Qtext}>Elena, Karla, and Faye are playing a card game where they score points. 
        Karla scores twice the number of points Elena does, and Faye scores 30 points more than Elena does. 
        The sum of their three scores is 114. Who scores more points, Karla or Faye?
      </Text>
      
      <Text style={Qstyle.subView}>Which strategy do you want to try?</Text>
      <Button
        title="Guess the number of points and see if it works."
        onPress={()=>{
            props.navigation.navigate("Q4ex1")
        }}
      />

      <Button
        title="Write equations to solve the problem."
        onPress={()=>{
            props.navigation.navigate("Q4ex2")
        }} 
      />

      <Button
        title="Use a diagram to try and understand the problem."
        onPress={()=>{
            props.navigation.navigate("Q4ex3")
        }} 
      />      

        <Button
        title="Next"
        onPress={()=>{
            props.navigation.navigate("Q4estimation")
        }} 
      />
    </View>);
}


export default Q4;