import { logout, protectPage } from "../firebase/firebase-auth.js"
import { getBlogInDb, getUserInDb } from "../firebase/firebase-firestore.js"

protectPage()

const logoutBtn = document.getElementById("logout")
logoutBtn.addEventListener("click",logout)

const currentUser = await getUserInDb()
const username = document.getElementById("username")
username.textContent = currentUser.name + " Blogs"


const blogData = await getBlogInDb()
console.log("blog data" , blogData);


const blogCards = document.getElementById("BlogCards")

for(let {id,userId,category,title,content,timestamp} of blogData){
    
    blogCards.innerHTML += ` 
    <div class="blog_card_1">
                <h5>${category}</h5>
                <h1>${title}</h1>
                <p>${content}</p>
                <p>Author ID: ${userId}</p>
                <p>${timestamp.toDate().toLocaleString()}</p>
                <button onclick="window.location.href = '../blog-details/blog-detail.html?id=${id}'">READ MORE</button>
            </div>`
}

