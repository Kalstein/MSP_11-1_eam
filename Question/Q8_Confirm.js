import React from 'react';
import {View, Text} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q8Confirm ({navigation}) {
  return (
    <View style = {Qstyle.mainView}>
      <Text style = {Qstyle.Qtext}>Nice work! That’s correct!</Text>
      <Text style = {Qstyle.Qtext}>What do you think the problem is asking you to do?</Text>
      <Button 
        title= "Try the third strategy for more points"
        onPress={()=>{
          navigation.navigate("Q8Main")
        }}
      />
    </View>
  );
}

export default Q8Confirm;