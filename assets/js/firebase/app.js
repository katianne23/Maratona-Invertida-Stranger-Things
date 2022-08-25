
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaUDkkwWircnbwk91-rzju68lr5w-sFdY",
    authDomain: "mundo-invertido-118c7.firebaseapp.com",
    projectId: "mundo-invertido-118c7",
    storageBucket: "mundo-invertido-118c7.appspot.com",
    messagingSenderId: "991591273245",
    appId: "1:991591273245:web:e84d9c7524eba9048f47f4",
    measurementId: "G-ERWYX5HBLB"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

