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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}