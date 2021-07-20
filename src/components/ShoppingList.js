import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  function handleFilterChange(e) {
    setSelectedCategory(e.target.value)
  } // I should close this function here
    
  const selectedLists = items.filter((item) => { 
    // put conditionals for the case of rendering all
      if(selectedCategory === "All") {
        return true;
      } else {
        return item.category === selectedCategory
      }
    })

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
      {/* now I can put updatedState here */}
        {selectedLists.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
