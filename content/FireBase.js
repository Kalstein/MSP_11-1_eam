import React, { useState } from 'react';
import { View } from 'react-native';
import { db }  from '../firebaseConfig';
import { collection, getDocs, query, where} from "firebase/firestore"; 

const readfromDB = async ()=>{
    const [users, setUsers] = useState();

    try{
        //const data = await getDocs(collection(db, "student"))
        const q = query(collection(db, "student"), where("test", "!=", ""));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
       
        //setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    } catch(error){
        console.log(error.message)
    }
}

export default readfromDB;