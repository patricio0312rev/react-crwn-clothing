
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyBfTn_t27K-KJ3YHON0yhGf1WGdat6JMMU",
    authDomain: "react-crwn-db-5d2e0.firebaseapp.com",
    projectId: "react-crwn-db-5d2e0",
    storageBucket: "react-crwn-db-5d2e0.appspot.com",
    messagingSenderId: "1001058577201",
    appId: "1:1001058577201:web:ac92c6962a8dd0a26d5e10",
    measurementId: "G-6QJCKTZ3Q3"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;