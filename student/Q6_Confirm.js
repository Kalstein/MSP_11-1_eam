import React from 'react';
import {View, Text} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q6Confirm ({navigation}) {
  return (
    <View style = {Qstyle.mainView}>
      <Text style = {Qstyle.Qtext}>Nice! The width of the rectangle 20. Let’s try a different method!</Text>
      <Text style = {Qstyle.Qtext}>What do you think the problem is asking you to do?</Text>
      <Button
        title="Select a  question"
        onPress={()=>{
          navigation.navigate("MainPage")
        }}/>
      <Button 
        title= "Try the third strategy for more points"
        onPress={()=>{
          navigation.navigate("Q6Main")
        }}
      />
	  </View>
  );
}

export default Q6Confirm;