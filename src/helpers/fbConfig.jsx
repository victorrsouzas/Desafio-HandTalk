import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyBW30_lci3_MVmJPgQTW0ZqW9WrObAU29s",
  authDomain: "testehandtalk.firebaseapp.com",
  databaseURL: "https://testehandtalk-default-rtdb.firebaseio.com",
  projectId: "testehandtalk",
  storageBucket: "testehandtalk.appspot.com",
  messagingSenderId: "37392538353",
  appId: "1:37392538353:web:354098cc309628d355a750"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;