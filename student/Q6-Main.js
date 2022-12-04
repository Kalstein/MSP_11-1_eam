import React from 'react';
import {View, Text} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q6Main ({navigation}) {
    return (
      <View style = {Qstyle.mainView}>
        <Text style = {Qstyle.Qtext}>A rectangle has a length that is unknown but is 12 inches longer than its width. The perimeter of the rectangle is 104 inches. What is the width of the rectangle?</Text>
        <Button
        title="Write an equation to solve it"
        onPress={()=>{
            navigation.navigate("Q6A")
        }}
      />
		  <Button
        title="Guess and check"
        onPress={()=>{
            navigation.navigate("Q6B")
        }}
      />
		  <Button
        title="Use a diagram to understand the problem"
        onPress={()=>{
            navigation.navigate("Q6C")
        }}
      />
	  </View>
    );
}

export default Q6Main;