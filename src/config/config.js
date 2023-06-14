import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC1EHKkTZl_Jb9fD7D2K_3MbMxa7R23faY',
  authDomain: 'fruit-shop-ferit-lv4.firebaseapp.com',
  projectId: 'fruit-shop-ferit-lv4',
  storageBucket: 'fruit-shop-ferit-lv4.appspot.com',
  messagingSenderId: '1055077963326',
  appId: '1:1055077963326:web:a6206aa44a80e277b4236f',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
