import {readfromStudentDB} from './FireBase';

const classNumber = 11

export const dataList = []

const data  = async () => {
    try {
        dataList = await readfromStudentDB(classNumber)
    } catch(error) {
        console.log(error)
    }
}

/*
heads : ['이름', 'Q1_A', 'Q1_B', 'Q1_C', 'Q2_A', 'Q2_B', 'Q2_C',
     'Q3_A', 'Q3_B', 'Q3_C', 'Q4_A', 'Q4_B', 'Q4_C', 
     'Q5_A', 'Q5_B', 'Q5_C', 'Q6_A', 'Q6_B', 'Q6_C',
     'Q7_A', 'Q7_B', 'Q7_C', 'Q8_A', 'Q8_B', 'Q8_C', '합'],
*/

const datas = {
    heads : ['이름', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', '합'],
    bodyDatas : [
        ['ㄱ', '1', '2', '3', '4', '4', '3', '2', '1', '11'],
        ['ㄴ', '1', '2', '3', '4', '1', '1', '1', '1', '12'],
        ['ㄷ', '1', '2', '3', '4', '1', '1', '1', '1', '13'],
        ['ㄹ', '1', '2', '3', '4', '1', '1', '1', '1', '14'],
        ['ㅁ', '1', '2', '3', '4', '1', '1', '1', '1', '15'],
        ['ㅂ', '1', '2', '3', '4', '1', '1', '1', '1', '16'],
        ['ㅅ', '1', '2', '3', '4', '1', '1', '1', '1', '17'],
        ['ㅇ', '1', '2', '3', '4', '1', '1', '1', '1', '18'],
        ['ㅈ', '1', '2', '3', '4', '1', '1', '1', '1', '19'],
        ['ㅊ', '1', '2', '3', '4', '1', '1', '1', '1', '20'],
        ['ㅋ', '1', '2', '3', '4', '1', '1', '1', '1', '21'],
        ['ㅌ', '1', '2', '3', '4', '1', '1', '1', '1', '22'],
        ['ㅍ', '1', '2', '3', '4', '1', '1', '1', '1', '23'],
        ['ㅎ', '1', '2', '3', '4', '1', '1', '1', '1', '24'],
    ],
    tails : ['평균', "", "", "", "", "", "", "", "", ""],
    teacherInformation : ["11", "선생님"]
}

let sum;

for (let i = 1; i < datas.tails.length; i++){
  sum = 0;

  for (let j = 0; j < datas.bodyDatas.length; j++){
      sum += Number(datas.bodyDatas[j][i]);
  }

  datas.tails[i] = parseFloat((sum / datas.bodyDatas.length).toFixed(2));
}

export default datas;