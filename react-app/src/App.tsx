import React, { useEffect, useRef, useState } from "react";
import ProductList from "./expense-tracker/components/ProductList";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

const App = () => {
  const [category, setCategory] = useState("");
  // afterRender
  useEffect(() => {
    connect();
    return () => disconnect();
  });

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
