const firebaseConfig = {
    apiKey: "AIzaSyBRbW8DyIQQRCy4eIsGAV3dwMQrZsF7Qkg",
    authDomain: "project93-2dc85.firebaseapp.com",
    databaseURL: "https://project93-2dc85-default-rtdb.firebaseio.com",
    projectId: "project93-2dc85",
    storageBucket: "project93-2dc85.appspot.com",
    messagingSenderId: "36128060236",
    appId: "1:36128060236:web:cc109c3045ce4a21f815e9",
    measurementId: "G-N6XY39K80W"
  };
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();