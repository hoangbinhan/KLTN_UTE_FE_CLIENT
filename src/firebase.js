import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5n0KPjnsPswon3SMbyFuVLUU5cCH2M5c",
    authDomain: "kltn-ute-fe-client.firebaseapp.com",
    projectId: "kltn-ute-fe-client",
    storageBucket: "kltn-ute-fe-client.appspot.com",
    messagingSenderId: "162663854679",
    appId: "1:162663854679:web:bbde8994b0f39d97112912",
    measurementId: "G-DBPRCB30FS"
};

const firebaseInitial = firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth()