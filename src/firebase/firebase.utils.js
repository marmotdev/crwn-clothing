import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBkiao1CgLo0G6KGFTJIQYjz03VtwxQFCw",
        authDomain: "crwn-db-d223e.firebaseapp.com",
        databaseURL: "https://crwn-db-d223e.firebaseio.com",
        projectId: "crwn-db-d223e",
        storageBucket: "",
        messagingSenderId: "532405498536",
        appId: "1:532405498536:web:85d300218e53395b41489d",
        measurementId: "G-TZNKVZXDHM"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
