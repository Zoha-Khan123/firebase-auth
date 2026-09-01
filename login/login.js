import { login, redirectIfLogin } from "../firebase/firebase-auth.js"

redirectIfLogin()

const loginForm = document.getElementById("loginForm")


const handleLogin = async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    await login(email,password)
    e.target.reset()
}


loginForm.addEventListener("submit",handleLogin)