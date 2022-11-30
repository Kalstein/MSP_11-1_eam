import { db }  from '../firebaseConfig';
import { collection, getDocs, query, where} from "firebase/firestore";

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

/*
addKey addName 
addQ1_0 addQ1_A addQ1_B addQ1_C addQ2_0 addQ2_A addQ2_B addQ2_C 
addQ3_0 addQ3_A addQ3_B addQ3_C addQ4_0 addQ4_A addQ4_B addQ4_C 
addQ5_0 addQ5_A addQ5_B addQ5_C addQ6_0 addQ6_A addQ6_B addQ6_C 
addQ7_0 addQ7_A addQ7_B addQ7_C addQ8_0 addQ8_A addQ8_B addQ8_C
addScore
*/