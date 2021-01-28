import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDQ94XY_Pwo2LzLSQA7gs2p5UnsGQi-FVc",
    authDomain: "blogapp-4c851.firebaseapp.com",
    projectId: "blogapp-4c851",
    storageBucket: "blogapp-4c851.appspot.com",
    messagingSenderId: "163161382326",
    appId: "1:163161382326:web:6989f36fe43e19112f3517"
});

export const auth = app.auth();
export default app;