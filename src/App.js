import { ProductCard } from "./components/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "bababoi",
    category: "baga",
    price: 100,
    img: "https://th.bing.com/th/id/R.eabc7594704938c63c65f75d66ea2e8c?rik=t4%2biO63ALDWkyw&riu=http%3a%2f%2fcbsnews1.cbsistatic.com%2fhub%2fi%2f2015%2f08%2f11%2f56e7f8c4-5815-4915-94f5-157e852170c6%2fgettyimages-103453502.jpg&ehk=NAc5%2b9XPgOfYYGRf8LGeKf9cgvsE7D6ZySoI%2f6N26uc%3d&risl=1&pid=ImgRaw&r=0"
  },
  {
    id: 2,
    name: "mamamoi",
    category: "maga",
    price: 101,
    img: "https://th.bing.com/th/id/R.eabc7594704938c63c65f75d66ea2e8c?rik=t4%2biO63ALDWkyw&riu=http%3a%2f%2fcbsnews1.cbsistatic.com%2fhub%2fi%2f2015%2f08%2f11%2f56e7f8c4-5815-4915-94f5-157e852170c6%2fgettyimages-103453502.jpg&ehk=NAc5%2b9XPgOfYYGRf8LGeKf9cgvsE7D6ZySoI%2f6N26uc%3d&risl=1&pid=ImgRaw&r=0"
  },
  {
    id: 3,
    name: "papapoi",
    category: "paga",
    price: 102,
    img: "https://th.bing.com/th/id/R.eabc7594704938c63c65f75d66ea2e8c?rik=t4%2biO63ALDWkyw&riu=http%3a%2f%2fcbsnews1.cbsistatic.com%2fhub%2fi%2f2015%2f08%2f11%2f56e7f8c4-5815-4915-94f5-157e852170c6%2fgettyimages-103453502.jpg&ehk=NAc5%2b9XPgOfYYGRf8LGeKf9cgvsE7D6ZySoI%2f6N26uc%3d&risl=1&pid=ImgRaw&r=0"
  },
]

function App() {
  return (
    <div> 
      {products.map((product) => (
        <ProductCard data={product} />
        ))} 
      </div>
  );
}

export default App;
