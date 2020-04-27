import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCZ1Rlwe_K9-nSSoes6pOHvf-9q_J6JnaQ",
    authDomain: "prince-db.firebaseapp.com",
    databaseURL: "https://prince-db.firebaseio.com",
    projectId: "prince-db",
    storageBucket: "prince-db.appspot.com",
    messagingSenderId: "152319870066",
    appId: "1:152319870066:web:fea8b363ac685b7b7e6eeb",
    measurementId: "G-1WVKTHPS3Z"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;

