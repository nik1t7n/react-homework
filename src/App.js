import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard/ProductCard";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-container">
      {loading && <div>Loading...</div>}
      {products.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
}

export default App;
