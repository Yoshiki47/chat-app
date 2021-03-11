import firebase from 'firebase'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC3_FKIke0tl3aGmGD9gn7TzeqZ3Ha8s-Q",
    authDomain: "chat-app-dbea2.firebaseapp.com",
    projectId: "chat-app-dbea2",
    storageBucket: "chat-app-dbea2.appspot.com",
    messagingSenderId: "619148147034",
    appId: "1:619148147034:web:d7dcb6f5f432c2b27d5b63"
}

firebase.initializeApp(firebaseConfig)

export default firebase