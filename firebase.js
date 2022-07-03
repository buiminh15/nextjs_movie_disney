import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAB2PGRunqCsOfnYjCwIppEuvnlp_9NVuY",
  authDomain: "movie-disney.firebaseapp.com",
  projectId: "movie-disney",
  storageBucket: "movie-disney.appspot.com",
  messagingSenderId: "741900939107",
  appId: "1:741900939107:web:e93c9e6064016e4de92d56",
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
