import { getFirestore ,  collection, addDoc } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { app } from "./firebase-config.js";

const db = getFirestore(app);

const addUser = async (userId , name , email) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      userId,
      name,
      email,
    });
    console.log("Document written with ID: ", docRef.id);
    
  } catch (error) {
    console.log(error);
    
  }

}


export {addUser }