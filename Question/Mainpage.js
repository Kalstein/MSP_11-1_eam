import React from 'react';
import {View} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function MainPage({navigation}) {
    return (
      <View style = {Qstyle.mainView}>
        <Button
        title="Question 5"
        onPress={()=>{
            navigation.navigate("Q5Main")
        }}
        />
        <Button
          title="Question 6"
          onPress={()=>{
              navigation.navigate("Q6Main")
          }}
        />
        <Button
          title="Question 7"
          onPress={()=>{
              navigation.navigate("Q7Main")
          }}
        />
        <Button
          title="Question 8"
          onPress={()=>{
              navigation.navigate("Q8Main")
          }}
        />
	    </View>
    );
  }

  export default MainPage;