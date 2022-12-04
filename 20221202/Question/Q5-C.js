import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q5C({navigation}) {
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
    question: 'Ok, you want to subtract from the total. Start by subtracting 34.5 inches. How much rope does Mario have left?',
    answer: '49.5 inches',
  },
  {
    question: 'Nice work! Now, how many times can Mario cut 8¼-inch sections from the rope before he has no rope left?',
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

export default Q5C;
