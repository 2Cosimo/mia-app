import { useEffect, useState } from "react"; 
import type { Product } from "../types/product"; 


export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]); 
    const [loading, setLoading] = useState(true);
     useEffect(() => {
  const timer = window.setTimeout(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel recupero dei prodotti:", error);
      });
  }, 2000);

  return () => clearTimeout(timer);
}, []);

  if (loading) { return <p> Caricamento...</p>}
  
  return (
    <section className="card">
      <h2>Lista prodotti</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Titolo</th>
            <th>Categoria</th>
            <th>Prezzo</th>
            <th>Descrizione</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>€ {product.price.toFixed(2)}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

