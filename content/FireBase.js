import { db }  from '../firebaseConfig';
import { collection, getDocs, query, where} from "firebase/firestore";

// 전달받은 값이 "O"일때 1씩 더하여 반환하는 함수
const add = (a, b, c) => {
    let sum = 0

    if (a == "O"){
        sum += 1
    }
    if (b == "O"){
        sum += 1
    }
    if (c == "O"){
        sum += 1
    }

    return sum
}

// 학급 번호를 전달받아 해당 학급의 학생 정보를 파이어베이스로 부터 받아와 형식에 맞춰 반환하는 함수
export const readfromStudentDB = async (classNumber)=>{
    try{
        const q = query(collection(db, "student"), where("addClass", "==", classNumber));
        const querySnapshot = await getDocs(q);
        let datas = []
        let data
        let i = 0
        
        querySnapshot.forEach((doc) => {
            data = doc.data()
            datas[i] = [data.addName, 
                add(data.addQ1_A, data.addQ1_B, data.addQ1_C),
                add(data.addQ2_A, data.addQ2_B, data.addQ2_C),
                add(data.addQ3_A, data.addQ3_B, data.addQ3_C),
                add(data.addQ4_A, data.addQ4_B, data.addQ4_C),
                add(data.addQ5_A, data.addQ5_B, data.addQ5_C),
                add(data.addQ6_A, data.addQ6_B, data.addQ6_C),
                add(data.addQ7_A, data.addQ7_B, data.addQ7_C),
                add(data.addQ8_A, data.addQ8_B, data.addQ8_C),
                data.addScore
            ]
            i++;
        });

        return datas
    } catch(error){
        console.log(error.message)
    }
}