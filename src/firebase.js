import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyBcPRsNX_hh1mV9b_tdvnxU53-E9qSNsHo",
    authDomain: "ecommerce-j6.firebaseapp.com",
    projectId: "ecommerce-j6",
    storageBucket: "ecommerce-j6.appspot.com",
    messagingSenderId: "203164346367",
    appId: "1:203164346367:web:d369d8d53e3e95afaa29ca"
  };

  export const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);



  

  

 