import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../Button';
import Qstyle from '../styling/Qstyle';

function Q5A({navigation}) {
	const [questionNum, setQuestionNum] = useState(0);	//문제 번호 변수
	const [isDone, setIsDone] = useState(false);		//문제를 다 풀었을 때 체크하기 위한 변수
	const [score, setScore] = useState(0);			//점수 변수
  const [answer, setAnswer] = useState('');			//사용자가 입력한 답을 저장하는 변수
  const [value, setValue] = useState('')			//사용자가 입력한 답을 저장하는 변수(TextInput 의 Value 값으로 들어감)

  const onClickSubmit = (e) => {				// submit 버튼을 클릭하는 이벤트가 발생했을 때 작동
    e.preventDefault();
    if(questionNum + 1 === list.length) {		 	// 모든 문제를 다 풀었을 경우
      if(answer === list[questionNum].answer){			//사용자가 입력한 답과 정답이 일치할 경우
        setScore(1);						// 이때 점수를 1점으로 저장
      }
      setIsDone(true);						//문제를 다 풀었을 경우 저장
    } else {
      setQuestionNum(questionNum + 1);				//모든 문제를 다 풀지 않았을 경우
    }								//현재 문제 번호에 1을 추가하여 다음 문제로 넘어 갈 수 있도록 문제 번호 저장
    setValue('')						//TextInput 의 값을 ' ' 으로 넣어서 제출 후 TextInput값이 빈칸으로 보임
  }
  const handleChangeText = (e) => {				//TextInput의 onChange에서 사용하여 TextInput의 값이 바뀔 때 마다 answer 와 value의 값을 저장
    setAnswer(e.target.value);
    setValue(e.target.value);
  }
  

   
  
  const list = [{						//문제와 정답이 저장되어 있는 배열
    question: 'What equation will represent the situation? Use the letter “m” as your vairable',
    answer: 'Anything equivalent to 8.25m + 34.5 = 84',
  },
  {
    question: 'Nice job! That equation looks good. Now can you solve for “m”?',
    answer: '6 sections',
  }

  ];
  
  return (
    <View style = {Qstyle.mainView}>
      {isDone ? (			//문제를 다 풀었을 경우와 다 풀지 않을 경우 다른 화면을 보여줌
        <>					//점수를 텍스트로 보여줌
          <Text stlye = {Qstyle.Qtext}>score: {score}</Text>	
          <Button 
            title="check" 
            onPress={()=>{
              navigation.navigate("Q5Confirm")
             
            }}
          />
        </> ) : 
        <>									//문제를 다 풀지 않았을 경우
										//문제를줌텍스트로 보여줌
          <Text style = {Qstyle.Qtext}>{list[questionNum].question}</Text> 
          <TextInput style ={Qstyle.input} onChange={(e) => handleChangeText(e)} value={value}/>
          <Button 
            title="submit"
            onPress={onClickSubmit}
          />
        </>
      }
    </View>
  );
}


export default Q5A;
