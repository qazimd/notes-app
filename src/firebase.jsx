import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA9Mb2g6zrZJHVEf4ztIKZLg8KBLaZDbtg",
    authDomain: "note-app-93fd1.firebaseapp.com",
    projectId: "note-app-93fd1",
    storageBucket: "note-app-93fd1.appspot.com",
    messagingSenderId: "286464884345",
    appId: "1:286464884345:web:f9c36d5a0245102897dea8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
