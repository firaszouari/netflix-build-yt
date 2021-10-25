import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDR3JTaRMqkPhwCqaPV7q7CPw9K31MZuSc",
    authDomain: "netflix-clone-yt-d865a.firebaseapp.com",
    projectId: "netflix-clone-yt-d865a",
    storageBucket: "netflix-clone-yt-d865a.appspot.com",
    messagingSenderId: "351167674471",
    appId: "1:351167674471:web:356cffea0f04d1c8423cc2"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

export {auth };
export default db;