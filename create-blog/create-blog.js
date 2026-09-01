import { logout , protectPage} from "../firebase/firebase-auth.js";
import { addBlogInDb } from "../firebase/firebase-firestore.js";

protectPage()

  const quill = new Quill('#editor', {
    theme: 'snow'
  });


// userState()
document.getElementById("logout").addEventListener("click",logout)

const blogForm = document.getElementById("blogForm")


const createBlog =  async (e) => {
  e.preventDefault()
  const blogTitle = document.getElementById("blogTitle").value
  const blogCategory = document.getElementById("blogCategory").value
  const blogContent = quill.root.innerHTML
  if (quill.getText().trim().length === 0) {
    alert("Please enter blog content");
    return;
  }
  await addBlogInDb(blogTitle,blogCategory,blogContent)  
  e.target.reset();                                                            
  quill.setText("");
}

blogForm.addEventListener("submit",createBlog)

