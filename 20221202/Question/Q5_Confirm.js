import React from 'react';
import {View, Text} from 'react-native';
import { TextInput } from 'react-native-web';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q5Confirm ({navigation}) {
  return (
    <View style = {Qstyle.mainView}>
      <Text style = {Qstyle.Qtext}>Nice! Mario can cut 6 sections of rope. Let’s try a different method!</Text>
      <Button
        title="Select a  question"
        onPress={()=>{
            navigation.navigate("MainPage")
        }}
      />
      <Button 
        title= "Try the third strategy for more points"
        onPress={()=>{
          navigation.navigate("Q5Main")
        }}
      />
      <Text style = {Qstyle.Qtext}>What do you think the problem is asking you to do?</Text>
      <TextInput style = {Qstyle.input}></TextInput>
	</View>
  );
}

export default Q5Confirm;