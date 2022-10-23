// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpZ6LzYcxUzHioaTUUxyORCEXNjZuXtXA",
  authDomain: "dragon-news-d6bce.firebaseapp.com",
  projectId: "dragon-news-d6bce",
  storageBucket: "dragon-news-d6bce.appspot.com",
  messagingSenderId: "647105495015",
  appId: "1:647105495015:web:b8b905f7a5d863dba7c742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;