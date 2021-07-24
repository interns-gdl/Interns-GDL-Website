import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDmtxnDEauqmg_fWA89QAOJYBA45rqALCg",
  authDomain: "interns-gdl.firebaseapp.com",
  projectId: "interns-gdl",
  storageBucket: "interns-gdl.appspot.com",
  messagingSenderId: "1000448766911",
  appId: "1:1000448766911:web:4166e2565be91b1c27e70a",
  measurementId: "G-BNL45VV81E"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;