// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC5TPr6ttRzYp3D8KqT4AYp_oVRM7dT_4",
  authDomain: "rohitkumar-contactform.firebaseapp.com",
  databaseURL: "https://rohitkumar-contactform-default-rtdb.firebaseio.com",
  projectId: "rohitkumar-contactform",
  storageBucket: "rohitkumar-contactform.appspot.com",
  messagingSenderId: "1021389623877",
  appId: "1:1021389623877:web:99a372e54d02797260892c",
  measurementId: "G-XDMHCFEHZ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector("#name").value;
  let number = document.querySelector("#number").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  console.log(name, number ,email, message);

  saveContactInfo(name, number, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, number, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    number: number,
    email: email,
    message: message,
  });
}
