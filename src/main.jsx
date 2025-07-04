import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from "./components/CartContext.jsx"
import './index.css';

// Configuración de Firebase
// Importa el archivo que ya inicializa Firebase
import './firebaseConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>,
);


