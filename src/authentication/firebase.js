    // Import the functions you need from the SDKs you need
    import { initializeApp } from  'firebase/app';
    import { getAuth } from  "firebase/auth";

    

    const firebaseConfig = {
      apiKey: "AIzaSyAicJixor7nXIThXMkEdGpeGArr7uZ5dws",
      authDomain: "listaprecios-9af1d.firebaseapp.com",
      projectId: "listaprecios-9af1d",
      storageBucket: "listaprecios-9af1d.appspot.com",
      messagingSenderId: "1011008839397",
      appId: "1:1011008839397:web:d8d1caa6c88ec9dc4d7e0c",
      //measurementId: "G-W0HW8YEHFD"
    };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    