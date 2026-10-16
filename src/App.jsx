import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  return (
    <div>
      <h1>React Product Dashboard</h1>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <div>
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name}</p>
      </div>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
