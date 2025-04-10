import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  Timestamp
} from "firebase/firestore";

export type Quote = {
  id: string;
  author: string;
  text: string;
  createdAt: Timestamp;
};

const isFirebaseConfigured = 
  !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY && 
  !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | undefined;
let db: Firestore | undefined;
let quotesCollection: CollectionReference<DocumentData> | undefined;

if (isFirebaseConfigured) {
  try {
    console.log("Firebase configuration found in environment variables, attempting to initialize...");
    app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);
    console.log("Firebase app initialized:", app?.name || "unknown");
    
    db = getFirestore(app);
    console.log("Firestore instance created");
    
    quotesCollection = collection(db, "quotes");
    console.log("Quotes collection reference created");
    
    console.log("Firebase successfully initialized with configuration from environment variables");
  } catch (error) {
    console.error("Firebase initialization error:", error);
    console.warn("Using mock data only due to Firebase initialization failure");
  }
} else {
  console.warn("Firebase environment variables missing. Using mock data only.");
  console.log("Missing environment variables:", {
    NEXT_PUBLIC_FIREBASE_API_KEY: !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "Missing" : "Present",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? "Missing" : "Present",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: !process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? "Missing" : "Present",
    NEXT_PUBLIC_FIREBASE_APP_ID: !process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? "Missing" : "Present"
  });
}

export const MOCK_QUOTES: Quote[] = [
  {
    id: "mock1",
    author: "Programmer Weeb",
    text: "Ngapain debug kode, mending rewrite dari awal",
    createdAt: Timestamp.now(),
  },
  {
    id: "mock2",
    author: "DevLazy",
    text: "Commit? Kalo ada waktu aja",
    createdAt: Timestamp.now(),
  },
  {
    id: "mock3",
    author: "Coder404",
    text: "Kalau kodenya error, tidur dulu biar fresh",
    createdAt: Timestamp.now(),
  },
  {
    id: "mock4",
    author: "FrontendWibu",
    text: "Dokumentasi is for the weak, real programmer bisa membaca pikiran developer lain",
    createdAt: Timestamp.now(),
  },
  {
    id: "mock5",
    author: "BackendSenpai",
    text: "Mending copy-paste dari Stack Overflow daripada mikir sendiri",
    createdAt: Timestamp.now(),
  },
  {
    id: "mock6",
    author: "GamerDev",
    text: "Satu jam ngoding, lima jam gaming. Perfectly balanced.",
    createdAt: Timestamp.now(),
  },
  {
    id: "mock7",
    author: "InfiniteJunior",
    text: "Senior: Tolong fix bug ini. Aku: Sudah coba restart komputer?",
    createdAt: Timestamp.now(),
  },
  {
    id: "mock8",
    author: "GelasPecah",
    text: "Testing in production, because we live dangerously",
    createdAt: Timestamp.now(),
  },
];

export { app, db, quotesCollection, isFirebaseConfigured }; 