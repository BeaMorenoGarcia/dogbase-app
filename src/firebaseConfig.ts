import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPgOMEfr0LVFLl68UcIO8I0y7CJG-Le-E",
    authDomain: "fir-list-ea435.firebaseapp.com",
    projectId: "fir-list-ea435",
    storageBucket: "fir-list-ea435.appspot.com",
    messagingSenderId: "245822734767",
    appId: "1:245822734767:web:2667d0be1dcc6fea266f5a"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
