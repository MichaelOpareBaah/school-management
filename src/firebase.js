import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyALfEda1jiyETnb4ycqd04MEY1bwi8jNKk',
  authDomain: 'school-management-ebb76.firebaseapp.com',
  projectId: 'school-management-ebb76',
  storageBucket: 'school-management-ebb76.appspot.com',
  messagingSenderId: '677492040313',
  appId: '1:677492040313:web:56e7f6ac341c6e1443eaa8',
  measurementId: 'G-S471YEWBBS',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
