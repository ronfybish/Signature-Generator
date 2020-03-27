import firebase from 'firebase/app'
import 'firebase/storage'  
import 'firebase/analytics'
var firebaseConfig = {
    apiKey: "AIzaSyC4OJmSzhYhltPCjeG9VCmmLZ39rz62cko",
    authDomain: "signautre-c6699.firebaseapp.com",
    databaseURL: "https://signautre-c6699.firebaseio.com",
    projectId: "signautre-c6699",
    storageBucket: "signautre-c6699.appspot.com",
    messagingSenderId: "505457762304",
    appId: "1:505457762304:web:43d483ebcce8f402c878e5",
    measurementId: "G-0T1Z95C9P4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()
  const storage=firebase.storage()
  
  export{storage,firebase as default};