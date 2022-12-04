import React from 'react';
import {View, Text} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q7Main({navigation}) {
    return (
      <View style = {Qstyle.mainView}>
        <Text style = {Qstyle.Qtext}>Jim needs to rent a car. A rental company charges $21.00 per day to rent a car and $0.10 for every mile driven. He will travel 250 miles. He has $115.00 to spend. How many days can he rent the car for?</Text>
        <Button
        title="Write an inequality to solve the problem"
        onPress={()=>{
            navigation.navigate("Q7A")
        }}
      />
		  <Button
        title="Guess and check"
        onPress={()=>{
            navigation.navigate("Q7B")
        }}
      />
		  <Button
        title="Use a diagram to understand the problem"
        onPress={()=>{
            navigation.navigate("Q7C")
        }}
      />
	  </View>
    );
}

export default Q7Main;