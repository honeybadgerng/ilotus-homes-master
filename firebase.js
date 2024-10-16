import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWXWxvyP0unzlLvvgSSzSB4PCEo9TqP3M",
  authDomain: "xclusive-cleaning-app.firebaseapp.com",
  projectId: "xclusive-cleaning-app",
  storageBucket: "xclusive-cleaning-app.appspot.com",
  messagingSenderId: "409608302416",
  appId: "1:409608302416:web:138b56a21beff9f34d0655",
};

const app = initializeApp(firebaseConfig);

// For Expo Managed Workflow, you may need to use getAuth directly without persistence
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
