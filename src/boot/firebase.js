import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCx2hTC7nkdlf383-nSv2e-MaMLam_YN_A",
  authDomain: "phoenix-f8a1e.firebaseapp.com",
  projectId: "phoenix-f8a1e",
  storageBucket: "phoenix-f8a1e.appspot.com",
  messagingSenderId: "158192297586",
  appId: "1:158192297586:web:ae69b4677eca06385204eb"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db