import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBR-GrxgZJTWQ149W41MTVRpES8yKBhUg",
  authDomain: "music-app-b0d3f.firebaseapp.com",
  projectId: "music-app-b0d3f",
  storageBucket: "music-app-b0d3f.appspot.com",
  messagingSenderId: "245781782595",
  appId: "1:245781782595:web:b41f189b0699df51e134f6",
  measurementId: "G-6KH23TC1DG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
