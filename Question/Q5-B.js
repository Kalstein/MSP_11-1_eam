import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q5B({navigation}) {
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
    question: 'Ok, you want to add on sections to 34.5 inches until you use up all the rope. First, how many inches of rope does Mario have?',
    answer: '84 inches',
  },
  {
    question: 'How many times can you add 8¼ inches to 34.5 inches to get 84 inches?',
    answer: '6 times',
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
              navigation.navigate("Q5Confirm")
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

export default Q5B;
