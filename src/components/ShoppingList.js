import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [itemsArray, setItems] = useState(items)
  const [filterBy, setFilterBy] = useState("All");

  const displayArray = itemsArray.filter((item) => {
    if (filterBy === "All"){
      return true;
    } else {
      return item.category === filterBy;
    }
  });

  function handleFilterChange(event){
    setFilterBy(event.target.value);
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
        {displayArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
