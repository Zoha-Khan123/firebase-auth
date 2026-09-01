import { getFirestore ,  collection, addDoc , serverTimestamp , query, where, getDocs , doc,getDoc  } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { app } from "./firebase-config.js";

const db = getFirestore(app);

const addUser = async (userId , name , email) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      userId,
      name,
      email,
    });
    
  } catch (error) {
    console.log(error);
    
  }

}

let  id = localStorage.getItem("userId");

const addBlogInDb = async (blogTitle , blogCategory , blogContent) => {
  try {
   
    const docRef = await addDoc(collection(db, "blog"), {
      title : blogTitle,
      category : blogCategory,
      content : blogContent,
      userId : id,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
    
  }

}



const getBlogInDb = async () => {
  
  const q = query(collection(db, "blog"), where("userId", "==", id));
  
  let userBlog = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    userBlog.push({...doc.data() , id : doc.id})
    console.log(doc.id);
    
  });
  return userBlog

}



const getUserInDb = async () => {
  
  const q = query(collection(db, "users"), where("userId", "==", id));
  
  let userProfile ;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    userProfile = doc.data()
  });
  return userProfile

}

const detailBlog = async (id) => {
 const docRef = doc(db, "blog", id);
const docSnap = await getDoc(docRef);
return docSnap.data()
}


export {addUser , addBlogInDb , getBlogInDb , getUserInDb , detailBlog}