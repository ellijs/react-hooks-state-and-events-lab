import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  function handleFilterChange(e) {

    setSelectedCategory(e.target.value)

    const selectedLists = items.filter((item) => item.category === selectedCategory)

    console.log(selectedLists)

    return (
        <ul className="Items">
          {selectedLists.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
    );
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
