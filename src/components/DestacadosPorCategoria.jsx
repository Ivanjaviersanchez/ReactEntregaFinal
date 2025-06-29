import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Producto from "./Producto";
import "./DestacadosPorCategoria.css";

const categorias = [
  { nombre: "Accesorios informáticos", id: "accesorios informaticos" },
  { nombre: "Monitores y pantallas", id: "monitores y pantallas" },
  { nombre: "Oficina varios", id: "oficina varios" },
  { nombre: "Notebooks y CPU", id: "notebooks y cpu" }
];

function DestacadosPorCategoria() {
    const [destacados, setDestacados] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsRef = collection(db, "items");

        const obtenerProductoMasBarato = async (categoria) => {
            const q = query(itemsRef, where("categoryId", "==", categoria.id));
            const snapshot = await getDocs(q);

            if (!snapshot.empty) {
                const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const masBarato = productos.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
                return { categoria: categoria.nombre, producto: masBarato };
            } else {
                return { categoria: categoria.nombre, producto: null };
            }
        };

        const fetchData = async () => {
            const resultados = await Promise.all(categorias.map(c => obtenerProductoMasBarato(c)));
            setDestacados(resultados);
        };

        fetchData();
    }, []);

    return (
        <div className="destacadosContainer">
            <h2>🔥 Destacados por Categoría (Precio más bajo)</h2>
            <div className="destacadosGrid">
                {destacados.map(({ categoria, producto }, index) => (
                    <div key={index} className="destacadoItem">
                        <h3 className="tituloCategoria">{categoria}</h3>
                        {producto ? (
                            <Producto
                                id={producto.id}
                                producto={producto.title}
                                descripcion={producto.description}
                                imagen={producto.imageId}
                                precio={producto.price}
                            />
                        ) : (
                            <p>No hay productos en esta categoría.</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DestacadosPorCategoria;

