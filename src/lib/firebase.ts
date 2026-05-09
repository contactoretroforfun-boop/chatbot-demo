import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if we have a valid-looking config
const isFirebaseConfigValid = 
  firebaseConfig.apiKey && 
  firebaseConfig.apiKey !== "your_api_key" &&
  firebaseConfig.projectId && 
  firebaseConfig.projectId !== "your_project_id";

let app;
let db: any;
let auth: any;
let storage: any;

if (isFirebaseConfigValid) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
  } catch (error) {
    console.error("Firebase Initialization Error:", error);
    // Fallback to null/mock will be handled in services
  }
} else {
  console.warn("Firebase config is missing or invalid. Running in Mock/Demo mode.");
}

export { app, db, auth, storage };
