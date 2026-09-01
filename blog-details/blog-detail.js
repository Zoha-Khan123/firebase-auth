import { detailBlog } from "../firebase/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
console.log(params);

const blogId = params.get("id");


console.log(blogId);
const detailInPage = await detailBlog(blogId);

document.getElementById("title").innerText = detailInPage.title

document.getElementById("authorId").innerText = detailInPage.userId
document.getElementById("category").innerText = detailInPage.category
document.getElementById("published").innerText = detailInPage.timestamp.toDate().toLocaleString()
document.getElementById("content").innerHTML = detailInPage.content

