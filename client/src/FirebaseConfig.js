import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider , signInWithPopup } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBddlDkPMTa4iRCknchzzW5NGhT8T8W3Uc",
  authDomain: "smit-webapp.firebaseapp.com",
  projectId: "smit-webapp",
  storageBucket: "smit-webapp.appspot.com",
  messagingSenderId: "723407574924",
  appId: "1:723407574924:web:d5130fd17e1d2ef100a8a9"
};

 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
const provider = new GoogleAuthProvider();
export let loggedIn= false;


export const signInWithGoogle = ()=> {
    console.log("Signin");
    signInWithPopup(auth , provider).then((result)=>{
        loggedIn = true;
        console.log(result);
      const user = result.user;
        console.log(user)
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        



    }).catch((error)=>{
        console.log(error)
    })
};
