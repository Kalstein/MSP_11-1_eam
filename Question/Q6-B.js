import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q6B({navigation}) {
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
    question: 'Ok, you want to guess and check. How long do you think the width is?',
    answer: 'Answers may vary -- use "w" as a variable',
  },
  {
    question: 'Cool, now let’s also guess the length of this rectangle.',
    answer: 'value: [w]+12',
  },
  {
    question: 'Ok, so you guessed that the width is [w] and the length is [w+12]. Now let’s find the perimeter of the rectangle with these dimensions.',
    answer: 'value: [4w+24]. If value is 104, go to confirmation. Otherwise, return to Stategy B Prompt 4+W7',
  },
  {
    question: 'Great! You got a perimeter of 104 inches. Now remember what you guessed. What is the width of the rectangle?',
    answer: '20',
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
              navigation.navigate("Q6Confirm")
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

export default Q6B;
