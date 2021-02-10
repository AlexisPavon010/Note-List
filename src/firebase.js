 import firebase from 'firebase/app'
 import 'firebase/firestore'


 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBFAEi_4qhpOpYVFecXZfmCqCn_KFIWm2c",
    authDomain: "react-chat-20a3b.firebaseapp.com",
    databaseURL: "https://react-chat-20a3b-default-rtdb.firebaseio.com",
    projectId: "react-chat-20a3b",
    storageBucket: "react-chat-20a3b.appspot.com",
    messagingSenderId: "925180698349",
    appId: "1:925180698349:web:6db264655a223940ca36e4"
  };
  // Initialize Firebase
  
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore()
