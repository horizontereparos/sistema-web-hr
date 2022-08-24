import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCAEAWh-dWflR6QCpkYSJUHELS5oyF-YX0",
    authDomain: "sistemaweb-d45c9.firebaseapp.com",
    projectId: "sistemaweb-d45c9",
});

export const db = getFirestore(firebaseApp)
