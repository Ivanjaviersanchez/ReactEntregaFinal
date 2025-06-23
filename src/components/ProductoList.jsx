import { useState } from "react"
import Producto from "./Producto"
import "./ProductoList.css"

const categories = {
  TODOS: "",
  ACCESORIOS: "accesorios informaticos",
  MONITORES: "monitores y pantallas",
  OFICINA: "oficina varios",
  COMPUTADORAS: "notebooks y cpu"
}

function ProductoList({ productos }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = selectedCategory
    ? productos.filter(
        producto =>
          producto.categoryId?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : productos;

  return (
    <div>
      <div className="filtroCategoriasStyles">
        <p>Filtrar por categoría:</p>
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value={categories.TODOS}>Todas</option>
          <option value={categories.ACCESORIOS}>Accesorios informáticos</option>
          <option value={categories.MONITORES}>Monitores y pantallas</option>
          <option value={categories.OFICINA}>Oficina varios</option>
          <option value={categories.COMPUTADORAS}>Notebooks y CPU</option>
        </select>
      </div>

      {filteredProducts.map(producto => (
        <Producto
          key={producto.id}
          id={producto.id}
          producto={producto.title}
          descripcion={producto.description}
          imagen={producto.imageId}
          precio={producto.price}
        />
      ))}
    </div>
  )
}

export default ProductoList

