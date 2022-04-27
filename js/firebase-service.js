const firebaseConfig = {
  apiKey: "AIzaSyBLEp3AJRHjzYUiBDMvrX3RGuDJbXDloxY",
  authDomain: "database-raskrask.firebaseapp.com",
  projectId: "database-raskrask",
  storageBucket: "database-raskrask.appspot.com",
  messagingSenderId: "763109986947",
  appId: "1:763109986947:web:e8c12cede20e4a9e5581b6",
  measurementId: "G-MCL2153SDH"
};
firebase.initializeApp(firebaseConfig);

export const firebaseDB = firebase.firestore();