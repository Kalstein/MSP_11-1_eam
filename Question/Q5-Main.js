import React from 'react';
import {View, Text} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q5Main ({navigation}) {
    return (
      <View style = {Qstyle.mainView}>
        <Text style = {Qstyle.Qtext}>Mario is setting up a new tent during a camping trip. The tent came with 7 feet of rope. The instructions are to use 34.5 inches of the rope to tie a tarp on top of the tent. Then, the remaining rope should be cut into 8¼-inch sections to tie the tent to stakes in the ground. Mario will use all of the rope as instructed. Write and solve an equation to determine the number of 8¼-inch sections of rope Mario can cut from the rope.</Text>
        <Button
        title="Write equations to solve the problem"
        onPress={()=>{
            navigation.navigate("Q5A")
        }}
      />
		<Button
        title="Add on from 34.5 inches until I use up all
        the rope"
        onPress={()=>{
            navigation.navigate("Q5B")
        }} 
      />
		<Button
        title="Subtract from the total until I get to 0"
        onPress={()=>{
            navigation.navigate("Q5C")
        }} 
      />      
	  </View>
    );
  
}

export default Q5Main;