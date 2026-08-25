import {redirectIfLogin,  signup } from "../firebase/firebase-auth.js"
import {  addUser } from "../firebase/firebase-firestore.js"

redirectIfLogin()

const signupForm = document.getElementById("signupForm")

const handleSignup = async (e) => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const authUser = await signup(email,password)
    console.log("authUser",authUser);
    if(authUser){
        await addUser(authUser.uid , name , email)
        window.location.href = "../dashboard/dashboard.html"

    }
    e.target.reset()
}

signupForm.addEventListener("submit",handleSignup)
