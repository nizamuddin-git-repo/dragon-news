// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu6uxjoN9oIk_S09Jc4asA37U5j3OwiiI",
  authDomain: "dragon-news-auth-8c6dd.firebaseapp.com",
  projectId: "dragon-news-auth-8c6dd",
  storageBucket: "dragon-news-auth-8c6dd.appspot.com",
  messagingSenderId: "806933017934",
  appId: "1:806933017934:web:0a3bdb6dbf033822405a1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
