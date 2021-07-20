import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(true)

  function moveToCart() {
    setIsInCart((isInCart) => !isInCart)
  }

  const liClass = isInCart ? "" : "in-cart" 
  const btnClass = isInCart ? "add" : "remove"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={moveToCart} className={btnClass}> 
        {isInCart ? "Add to Cart" : "Remove From Cart"} 
      </button>
    </li>
  );
}

export default Item;
