// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAk_gg7lHoMJdVlisKbiUdJ35idJDg-P9s",
      authDomain: "social-e5855.firebaseapp.com",
      databaseURL: "https://social-e5855-default-rtdb.firebaseio.com",
      projectId: "social-e5855",
      storageBucket: "social-e5855.appspot.com",
      messagingSenderId: "671543009162",
      appId: "1:671543009162:web:a881fdddf02bf05c08b273"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot) {
                              childKey = childSnapshot.key;
                              childData = childSnapshot.val();
                              if (childKey != "purpose") {
                                    firebase_message_id = childKey;
                                    message_data = childData;
                                    //Start code
                                    console.log("Room Name -" + Room_names);
                                    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                                    document.getElementById("output").innerHTML += row;
                                    //End code
                                                }                              });
                  });
      }
      getData();

      function addRoom() {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose: "adding room name"
            });
            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
      }

      function redirectToRoomName(name) {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }