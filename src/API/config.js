import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyBdGz1Ss_Ncbxf5Gi8_CBwgXNKUUWgJTv8",
  authDomain: "portfolio-6b049.firebaseapp.com",
  projectId: "portfolio-6b049",
  storageBucket: "portfolio-6b049.appspot.com",
  messagingSenderId: "964951094693",
  appId: "1:964951094693:web:72edf5b457e78d93bea44c",
  measurementId: "G-1X4LDFTC62",
};

const firebaseApp = initializeApp(firebaseConfig);

const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider("6Ldqk9MjAAAAAP823b1ogaY0a35PXn0bf7HNLqVE"),
  isTokenAutoRefreshEnabled: true,
});

export default firebaseApp;
