import firebase from "firebase/app";
import "firebase/app-check";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdGz1Ss_Ncbxf5Gi8_CBwgXNKUUWgJTv8",
  authDomain: "portfolio-6b049.firebaseapp.com",
  projectId: "portfolio-6b049",
  storageBucket: "portfolio-6b049.appspot.com",
  messagingSenderId: "964951094693",
  appId: "1:964951094693:web:72edf5b457e78d93bea44c",
  measurementId: "G-1X4LDFTC62",
};

firebase.initializeApp(firebaseConfig);

const appCheck = firebase.appCheck();

appCheck.activate("6Lf3IkobAAAAAE6wesKFGHLgYrbAaj3zU9gUSiK5");

export default firebase;
