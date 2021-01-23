import firebase from 'firebase';
import 'firebase/storage';

let config = {
  apiKey: "AIzaSyB6xKpEVbXFVxDF4w45oRTVplfGWtnqYUs",
  authDomain: "affiliate-marketing-a889f.firebaseapp.com",
  projectId: "affiliate-marketing-a889f",
  storageBucket: "affiliate-marketing-a889f.appspot.com",
  messagingSenderId: "836424042687",
  appId: "1:836424042687:web:40ce6849b0ee9eecf2de0a",
  measurementId: "G-56QDEZKEP2"
}

firebase.initializeApp(config);

let storage = firebase.storage();

export {
  storage, firebase as default
};