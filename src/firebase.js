import firebase, { firestore } from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDA99nqXEZqp9dRnwUZz8n96VR_edZfyu8",
  authDomain: "chat-app-c779a.firebaseapp.com",
  databaseURL: "https://chat-app-c779a.firebaseio.com",
  projectId: "chat-app-c779a",
  storageBucket: "chat-app-c779a.appspot.com",
  messagingSenderId: "247102069227",
  appId: "1:247102069227:web:ba98664d666368d06321ae",
  measurementId: "G-T60Y9RQDLE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // conect with fb
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;