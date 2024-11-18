import firebase from "firebase";



var firebaseConfig = {
    apiKey: "AIzaSyD_t4VvoQF4rZJoQaVHWrzUPKjuA1fhR4Q",
    authDomain: "scope-a7c13.firebaseapp.com",
    databaseURL: "https://scope-a7c13-default-rtdb.firebaseio.com",
    projectId: "scope-a7c13",
    storageBucket: "scope-a7c13.appspot.com",
    messagingSenderId: "149306714348",
    appId: "1:149306714348:web:cdfbe0e8ca514818bc1dc9",
    measurementId: "G-0EV8ZBLB7F"
  };
  // Initialize Firebase
  var fire=firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
fire.database().ref().child('test1')


  export default fire;