import React from 'react';
import {View, Text} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q8Main ({navigation}) {
    return (
      <View style = {Qstyle.mainView}>
        <Text style = {Qstyle.Qtext}>Owen is designing a rectangular garden whose length is 25 feet. He needs to put fencing all around the exterior of the garden and wants to use less than 80 feet of fencing. How wide could the garden be?</Text>
        <Button
          title="Guess and check"
          onPress={()=>{
            navigation.navigate("Q8A")
          }}
        />
		    <Button
          title="Write an inequality to solve the problem"
          onPress={()=>{
            navigation.navigate("Q8B")
          }}
        />
		    <Button
          title="Add up until I figure out the width of 
          the garden."
          onPress={()=>{
            navigation.navigate("Q8C")
          }}
        />
	    </View>
    );
}

export default Q8Main;