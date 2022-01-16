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
App.initializeApp()
user = localStorage.getItem("user_name")

function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name" , room_name);
    window.location = "chat_app_page.html"
    
      }
function getData()
{firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("Room_names -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML=row;

  //End code
  });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location= "chat_app_page.html";
}
function logout(){
localStorage.removeItem(user_name);
localStorage.removeItem("room_name")
window.location = "index.html"
}