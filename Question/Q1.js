import Button from '../Button';                       //1번 문제 화면
import {Text, View} from 'react-native';              //버튼 컴포넌트를 받아와서 쓴다.
import Qstyle from '../styling/Qstyle';

const Q1 = (props) => {
    return(
    <View style = {Qstyle.mainView}>
      <Text style={Qstyle.Qtext}>Todd orders pictures from a photographer. Each picture costs $7.50.
A one-time shipping fee of $3.25 is added to the cost of the order.
The total cost of Todd’s order before tax is $85.75.

How many pictures did Todd order?</Text>
      
      <Text style={Qstyle.subView}>Which strategy do you want to try?</Text>
      <Button
        title="Write an equation to solve the problem"
        onPress={()=>{
            props.navigation.navigate("Q1ex1")        //1번문제 A방식 화면으로 화면 이동
        }}
      />

      <Button
        title="Add on the shipping fee until I get to $85,75."
        onPress={()=>{
            props.navigation.navigate("Q1ex2")       //1번문제 B방식 화면으로 화면 이동
        }} 
      />

      <Button
        title="Subtract away from $85,75 until I get to O."
        onPress={()=>{
            props.navigation.navigate("Q1ex3")      //1번문제 C방식 화면으로 화면 이동
        }} 
      />      

      <Button
        title="Next"
        onPress={()=>{
            props.navigation.navigate("Q1estimation") //1번문제 평가 화면로 화면 이동
        }} 
      />
    </View>);
}

export default Q1;