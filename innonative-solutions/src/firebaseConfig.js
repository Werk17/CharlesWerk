// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7Cfb12vhToi4oN6YtW6hy6DfgNyXpF4Y",
    authDomain: "innonative-solutions.firebaseapp.com",
    projectId: "innonative-solutions",
    storageBucket: "innonative-solutions.appspot.com",
    messagingSenderId: "268920578714",
    appId: "1:268920578714:web:ffbec238d090a8e1863523",
    measurementId: "G-7G67J01934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { analytics, db, auth };