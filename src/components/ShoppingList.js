import React, { useState } from "react";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
     <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} items={items}/>
  );
}

export default ShoppingList;
