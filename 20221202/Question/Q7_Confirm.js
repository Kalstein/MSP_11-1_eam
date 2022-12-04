import React from 'react';
import {View, Text} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q7Confirm ({navigation}) {
  return (
    <View style = {Qstyle.mainView}>
      <Text style = {Qstyle.Qtext}>Fantastic! Jim can rent the car for 4 days!</Text>
      <Text style = {Qstyle.Qtext}>What do you think the problem is asking you to do?</Text>
      <Button
        title="Select a  question"
        onPress={()=>{
          navigation.navigate("MainPage")
      }}/>
      <Button 
        title= "Try the third strategy for more points"
        onPress={()=>{
          navigation.navigate("Q7Main")
        }}
      />
	  </View>
  );
}

export default Q7Confirm;