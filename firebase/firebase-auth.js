import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { app } from "./firebase-config.js";

const auth = getAuth(app);


const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user
            localStorage.setItem("userId", user.uid);
            console.log("user siginup successfully");
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);

            // ..
        });

}

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            localStorage.setItem("userId", user.uid)
            console.log("User login succesfully");
            return user

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);

        });
}

const logout = () => {
    signOut(auth).then(() => {
        console.log("Logout successfull");
        localStorage.clear("userId")
        window.location.href = "../login/login.html"
    }).catch((error) => {
        console.log(error);

    });

}


const protectPage = () => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.href = "../login/login.html"
        }
    });
}

const redirectIfLogin = () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe()
        if (user) {
            window.location.href = "../dashboard/dashboard.html"
        }
    });
}

export { auth , signup, login, logout, protectPage, redirectIfLogin}