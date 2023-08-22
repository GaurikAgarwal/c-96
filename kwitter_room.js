var firebaseConfig = {
      apiKey: "AIzaSyCCKLCZoHJORydvPIorvB-OHZZNDkh-ZQM",
      authDomain: "kwitternew-b50c4.firebaseapp.com",
      databaseURL: "https://kwitternew-b50c4-default-rtdb.firebaseio.com",
      projectId: "kwitternew-b50c4",
      storageBucket: "kwitternew-b50c4.appspot.com",
      messagingSenderId: "1096855307747",
      appId: "1:1096855307747:web:9839fefea2e5126bec4cd6"
    };
    
    
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+":";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;        
      });});}
getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"     
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
} 
function redirectToRoomName(name){
         console.log(name);
         localStorage.setItem("room_name",name);
         window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}