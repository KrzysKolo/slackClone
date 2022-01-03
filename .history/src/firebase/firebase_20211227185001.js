import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBiDML45atq8wYC2L4duVl1ZF47WUbyJZE",
  authDomain: "slack-clone-yt-aacb1.firebaseapp.com",
  projectId: "slack-clone-yt-aacb1",
  storageBucket: "slack-clone-yt-aacb1.appspot.com",
  messagingSenderId: "921980316789",
  appId: "1:921980316789:web:b76b7a04d945f0a8095c3c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }