// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCScQyGHcvx6JonomE48dk7IKGuca81XPY',
  authDomain: 'chatgpt-messe-nger.firebaseapp.com',
  projectId: 'chatgpt-messe-nger',
  storageBucket: 'chatgpt-messe-nger.appspot.com',
  messagingSenderId: '302355220413',
  appId: '1:302355220413:web:bcde3c9e573b74578bf4d4',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
