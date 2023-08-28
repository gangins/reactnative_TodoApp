// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE9eAGE9Y9MgeGQqFsBBlPU73Am1XOLkM",
  authDomain: "react-native-app-cf9ca.firebaseapp.com",
  projectId: "react-native-app-cf9ca",
  storageBucket: "react-native-app-cf9ca.appspot.com",
  messagingSenderId: "298878053736",
  appId: "1:298878053736:web:cda469eb7edf63bb2dfadd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
