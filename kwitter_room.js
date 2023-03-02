const firebaseConfig = {
    apiKey: "AIzaSyBmsUjxrNXfKW7ncmt8xbOPq9dgDBuE1_Y",
    authDomain: "let-schat-f0a5b.firebaseapp.com",
    databaseURL: "https://let-schat-f0a5b-default-rtdb.firebaseio.com",
    projectId: "let-schat-f0a5b",
    storageBucket: "let-schat-f0a5b.appspot.com",
    messagingSenderId: "598971212428",
    appId: "1:598971212428:web:9a471e42b18bacabd411a9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick= ' redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    
    //End code
    });});}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name" 
    });

    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
      window.location = "index.html";
}



