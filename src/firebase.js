import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATuqitYzJt_y221_q7NY_rGD57duxkx9M",
    authDomain: "clone-28d93.firebaseapp.com",
    databaseURL: "https://clone-28d93.firebaseio.com",
    projectId: "clone-28d93",
    storageBucket: "clone-28d93.appspot.com",
    messagingSenderId: "940114069222",
    appId: "1:940114069222:web:c1ac697f259a49a900dd27",
    measurementId: "G-6EVNXECCY2"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth}
