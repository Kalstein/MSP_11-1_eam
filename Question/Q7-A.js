import React, { useState } from 'react';
import {View, Text,TextInput} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q7A({navigation}) {
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
    question: 'What equation will represent the situation? Use the letter “x” as your variable',
    answer: 'Anything equivalent to "21d + (250)(0.10) less than or equal to 115"',
  },
  {
    question: 'Nice job! That inequality looks good. Now can you solve for “d” and enter your answer as an inequality?',
    answer: 'Anything equivalent to "d less than or equal to 4 2/7"',
  },
  {
    question: 'Great! Now based on that inequality, how many days can Jim rent the car for?',
    answer: '4 days',
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

export default Q7A;
