import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q7C({navigation}) {
	const [questionNum, setQuestionNum] = useState(0);
	const [isDone, setIsDone] = useState(false);
	const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [value, setValue] = useState('')

  const onClickSubmit = (e) => {
    e.preventDefault();
    if(questionNum + 1 === list.length) {
      if(answer === list[questionNum].answer){
        setScore(1);
      }
      setIsDone(true);
    } else {
      setQuestionNum(questionNum + 1);
    }
    setValue('')
  }
  const handleChangeText = (e) => {
    setAnswer(e.target.value);
    setValue(e.target.value);
  }
  const list = [{
    question: 'Ok, you want to try adding up. Let’s start by finding the cost of driving 250 miles. How much will that cost?',
    answer: '25',
  },
  {
    question: 'All right, you say he pays $25 for mileage. Then he has to pay $21 for each day that he rents. How many times can you add $21 without going over $115?',
    answer: '4',
  }];

  return (
    <View style = {Qstyle.mainView}>
      {isDone ? (
        <>
          <Text style = {Qstyle.Qtext}>score: {score}</Text>
          <Button 
            title="check" 
            onPress={()=>{
              navigation.navigate("Q7Confirm")
            }}
          />
        </> ) : 
        <>
          <Text style = {Qstyle.Qtext}>{list[questionNum].question}</Text>
          <TextInput style = {Qstyle.input} onChange={(e) => handleChangeText(e)} value={value}/>
          <Button 
            title="submit"
            onPress={onClickSubmit}
          />
        </>
      }
    </View>
  );
}

export default Q7C;
