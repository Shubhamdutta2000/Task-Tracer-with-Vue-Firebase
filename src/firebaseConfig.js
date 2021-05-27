import firebase from "firebase/app";

// config file
const firebaseConfig = {
  apiKey: "AIzaSyAuilkSbRBwrpRudyWOFZQBirrIgxyp-qA",
  authDomain: "task-tracker-ea2f7.firebaseapp.com",
  projectId: "task-tracker-ea2f7",
  storageBucket: "task-tracker-ea2f7.appspot.com",
  messagingSenderId: "408284746288",
  appId: "1:408284746288:web:7024edbd3f4df74684d3f5",
  measurementId: "G-77NDF45KGW",
};

var app = firebase.initializeApp(firebaseConfig);

export default app;
