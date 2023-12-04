import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtJBAIXwRHMAxWoqXEVTfcVyHAtPV6TPI",
  authDomain: "disney-movie-4dced.firebaseapp.com",
  projectId: "disney-movie-4dced",
  storageBucket: "disney-movie-4dced.appspot.com",
  messagingSenderId: "564217185262",
  appId: "1:564217185262:web:314e86874f4cb29d4904ff"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
