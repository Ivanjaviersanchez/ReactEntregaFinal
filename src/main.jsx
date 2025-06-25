import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from "./components/CartContext.jsx"
import { initializeApp } from "firebase/app";
import './index.css';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDnW6n30wHK8tmkVyzi1Zm5GFycBKxlO9E",
  authDomain: "tecnobox-ecommerce.firebaseapp.com",
  projectId: "tecnobox-ecommerce",
  storageBucket: "tecnobox-ecommerce.firebasestorage.app",
  messagingSenderId: "830227654776",
  appId: "1:830227654776:web:c573f85643ab87a91f658d"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>,
);


