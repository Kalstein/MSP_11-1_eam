import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q8A({navigation}) {
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
    question: 'Ok, you want to guess and check. First, how much fencing will he need for the two sides of the fence that go along the length of the garden?',
    answer: '50 feet',
  },
  {
    question: 'Ok, you said he will need 50 feet of fencing for the sides that go along the length of the garden. So, what is the widest garden that you think he could make?',
    answer: 'Answers will vary -- use "x" as variable',
  },
  {
    question: 'Ok, so you’re guessing the garden would be [x] feet wide. How much fencing would he need to make the two sides that go along the width?',
    answer: 'equivalent to 2[x]',
  },
  {
    question: 'Ok, if that’s true, then how much fencing would he use all together to make his rectangular garden fence? work!',
    answer: 'Equivalent to 2[x]+50. If value is 80, go to confirmation. Otherwise, return to Strategy A Prompt 2',
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
              navigation.navigate("Q8Confirm")
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

export default Q8A;
