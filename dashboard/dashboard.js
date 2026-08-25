import { logout, protectPage } from "../firebase/firebase-auth.js"

protectPage()
const logoutBtn = document.getElementById("logout")
logoutBtn.addEventListener("click",logout)
