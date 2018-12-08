import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBxhf7uoEnDYuygyowu6QyoAAZBMiqHP40",
  authDomain: "gif-battles.firebaseapp.com",
  databaseURL: "https://gif-battles.firebaseio.com",
  projectId: "gif-battles",
  storageBucket: "gif-battles.appspot.com",
  messagingSenderId: "641911335695"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
