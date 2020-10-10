import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBSuHN9LeYTCSxzrMg5ZZB6eKxlQBcy7zg",
    authDomain: "vuefire-chat-a4cb5.firebaseapp.com",
    databaseURL: "https://vuefire-chat-a4cb5.firebaseio.com",
    projectId: "vuefire-chat-a4cb5",
    storageBucket: "vuefire-chat-a4cb5.appspot.com",
    messagingSenderId: "132906170138",
    appId: "1:132906170138:web:694485c7f1e84bb5b41ea3"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
