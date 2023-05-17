import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function addToCart(){
    setInCart((inCart) => !inCart);
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className={inCart ? 'in-cart' : ''}>{category}</span>
      <button onClick={addToCart} className="add">{inCart ? 'Remove From Cart' : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
