import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: "1:2334718944:web:b42c77f841f002c9c50985"
};

//* init firebase
firebase.initializeApp(firebaseConfig)

// * init services
export const projectFirestore = firebase.firestore()
