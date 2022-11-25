import FB from './FireBase';

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