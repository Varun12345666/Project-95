// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDzLIg4vgA8JkDgH-BT8HK1kHukLAe0fg0",
      authDomain: "kwitter-43c57.firebaseapp.com",
      databaseURL: "https://kwitter-43c57-default-rtdb.firebaseio.com",
      projectId: "kwitter-43c57",
      storageBucket: "kwitter-43c57.appspot.com",
      messagingSenderId: "11693731578",
      appId: "1:11693731578:web:e89cb6c2931e9d96256343"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

