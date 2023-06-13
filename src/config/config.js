import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC1EHKkTZl_Jb9fD7D2K_3MbMxa7R23faY',
  authDomain: 'fruit-shop-ferit-lv4.firebaseapp.com',
  projectId: 'fruit-shop-ferit-lv4',
  storageBucket: 'fruit-shop-ferit-lv4.appspot.com',
  messagingSenderId: '1055077963326',
  appId: '1:1055077963326:web:a6206aa44a80e277b4236f',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
