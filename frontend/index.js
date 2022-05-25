// header("Access-Control-Allow-Origin: *");
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWx-PvSeVtloXpZHdOtdbojo35Hq6grS4",
  authDomain: "limit-people-19e80.firebaseapp.com",
  databaseURL: "https://limit-people-19e80-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "limit-people-19e80",
  storageBucket: "limit-people-19e80.appspot.com",
  messagingSenderId: "319024013208",
  appId: "1:319024013208:web:a7f17522fe14584952d5ed"
};
  
const app = initializeApp(firebaseConfig);

const db = getDatabase();

// var countNumber = document.getElementById("Number");

// function SelectData(){
//     const dbref = ref(db);
//     get(child(dbref,"count")).then((snapshot)=>{
//         if (snapshot.exists()){
//             let number = snapshot.val();
//             console.log(number);
//             document.getElementById("Number").innerHTML = snapshot.val();

//         }
//     });
// }

// SelectData();

const starCountRef = ref(db, 'count');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  document.getElementById("Number").innerHTML = data;
});

