// Firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging.js";

// 2️⃣ Your Firebase config
const firebaseConfig = {
apiKey: "AIzaSyC-76PvcoRrWNm_PEO99RVpdQN6kDpWLYM",
authDomain: "habit-flow-e1767.firebaseapp.com",
projectId: "habit-flow-e1767",
storageBucket: "habit-flow-e1767.firebasestorage.app",
messagingSenderId: "980356715150",
appId: "1:980356715150:web:a0de03cf6176d9e6feafdf",
measurementId: "G-862HGG582M"
};

// 3️⃣ Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4️⃣ Export Auth, Firestore, Messaging
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);