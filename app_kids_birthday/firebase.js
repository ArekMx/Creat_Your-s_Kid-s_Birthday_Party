import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDy1TZofLzAf0a3Mg5Ya_TYOZsfPsuClD4",
    authDomain: "app-kid-s-birthday.firebaseapp.com",
    projectId: "app-kid-s-birthday",
    storageBucket: "app-kid-s-birthday.appspot.com",
    messagingSenderId: "906672184638",
    appId: "1:906672184638:web:fc152b11ccc2f32394606f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

