var firebaseConfig = {
    apiKey: "AIzaSyA9Wb46UVpKsBKWJB0QzW_jcseba_v2el4",
    authDomain: "project93-b3ba9.firebaseapp.com",
    databaseURL: "https://project93-b3ba9-default-rtdb.firebaseio.com",
    projectId: "project93-b3ba9",
    storageBucket: "project93-b3ba9.appspot.com",
    messagingSenderId: "491809894108",
    appId: "1:491809894108:web:fe073ede26d5f99f2d8e19",
    measurementId: "G-F5VRMF7L67"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
           name1:user_name,
          message:msg,
like:0 });
document.getElementById("message").value = "";
    }
function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name_1 = message_data['name1'];
message = message_data ['message'];
like = message_data['like'];


namewithtag = "<h4>"+ name_1 + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = namewithtag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML=row;
//End code
    } });  }); }
getData();
function updateLike (){
console.log("clicked on the liked button"+firebase_message_id)
button_id= firebase_message_id;
likes = document.getElementById (button_id).value;
updatedlikes = Number (likes)+1;
console.log(updatedlikes)
firebase.database().ref(room_name).child(firebase_message_id).update({ like : updatedlikes });
}
function logout() 
{ localStorage.removeItem("user_name");
localStorage.removeItem("room_name"); 
window.location.replace("index.html"); }