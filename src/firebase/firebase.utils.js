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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        
        if(!snapShot.exists) {
                const { displayName, email } = userAuth
                const createdAt = new Date();

                try{
                        await userRef.set ({
                                displayName,
                                email,
                                 createdAt,
                                ...additionalData
                })
                } catch (error) {
                        console.log('error creating user', error.message);
                }
        }
        return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
