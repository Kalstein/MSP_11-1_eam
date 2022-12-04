import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q7B({navigation}) {
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
    question: 'Ok, you want to guess and check. First, how much will he pay in mileage?',
    answer: '25',
  },
  {
    question: 'Cool, so he’s paying $25 in mileage. How many days do you think he can rent the car for? ',
    answer: 'Answers will vary, use "x" as variable',
  },
  {
    question: 'Ok, so you think that he can rent it for [x] days. How much would Jim pay in total?',
    answer: 'Equivalent to 21[x] + 25. If answer is 4, go to confirmation. Otherwise return to Strategy B Prompt 2.',
  }
  ];

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

export default Q7B;
