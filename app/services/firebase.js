import Service from '@ember/service';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBf7lvGyCrucV-syrmHc_LBLdQxyFJCvkQ",
  authDomain: "inclass-5117.firebaseapp.com",
  projectId: "inclass-5117",
  storageBucket: "inclass-5117.firebasestorage.app",
  messagingSenderId: "554278415504",
  appId: "1:554278415504:web:ebfd2ec4addf1d810bbc15",
  measurementId: "G-RTQKZLK88K"
};

export default class FirebaseService extends Service {
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
}
