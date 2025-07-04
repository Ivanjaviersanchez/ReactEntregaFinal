import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ProductoList from "./ProductoList";
import "./Catalogo.css";

function Catalogo() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection)
      .then((snapshot) => {
        console.log("Snapshot:", snapshot); // Pregunta si viene algo
        if (!snapshot.empty) {
          const productosData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          console.log("Productos desde Firestore:", productosData);  // Pregunta si hay productos
          setProductos(productosData);
        } else {
          console.log("No hay documentos en la colección.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);


  return (
    <div className="catalogoStyles">
      <h2>Catálogo de productos</h2>
      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ProductoList productos={productos} />
      )}
    </div>
  );
}

export default Catalogo;
