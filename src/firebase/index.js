// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// auth kurulumunu yapmak için importlar
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATq-YkC5tGrJPcolH9CuMB6zl6TzggXgA",
  authDomain: "chat-app-c8eb4.firebaseapp.com",
  projectId: "chat-app-c8eb4",
  storageBucket: "chat-app-c8eb4.appspot.com",
  messagingSenderId: "23823942079",
  appId: "1:23823942079:web:a3ab2fa42cc6c12764a10a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// kimlik doğrulama işleminin referansını al

export const auth = getAuth(app);

// google sağlayıcısının kurulumunu yapmak için 
export const provider =  new GoogleAuthProvider();

// veritabanın referansını al

export const db = getFirestore(app);