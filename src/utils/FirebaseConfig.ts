import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: 'AIzaSyAOVjx_oqHIAfVHUWu6nhEVEyozqQY06J4',
  authDomain: 'billionairebride-2c01e.firebaseapp.com',
  projectId: 'billionairebride-2c01e',
  storageBucket: 'billionairebride-2c01e.firebasestorage.app',
  messagingSenderId: '839227640769',
  appId: '1:839227640769:web:ed53551d68a7dabb07fd40',
  measurementId: 'G-W53EM9CX33',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
