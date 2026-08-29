import { getFirestore ,  collection, addDoc , serverTimestamp , query, where, getDocs   } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
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

let  id = localStorage.getItem("user");

const addBlogInDb = async (blogTitle , blogCategory , blogContent) => {
  try {
   
    const docRef = await addDoc(collection(db, "blog"), {
      title : blogTitle,
      category : blogCategory,
      content : blogContent,
      userId : id,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", id);
    
  } catch (error) {
    console.log(error);
    
  }

}



const getBlogInDb = async () => {
  console.log("currentuser" , id);
  
  const q = query(collection(db, "blog"), where("userId", "==", id));
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
    

}

export {addUser , addBlogInDb , getBlogInDb }