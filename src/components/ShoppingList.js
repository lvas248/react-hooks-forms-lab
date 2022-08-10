import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filter, setFilter] = useState("")
 

  function handleNewItem(obj){
    setItems([...items, obj])
  }

  function handleFilter(event){
    setFilter(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {

    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;

  });

  const newItemsToDisplay = itemsToDisplay.filter(item =>{
    const itemName = item.name.toLowerCase()
    return itemName.includes(filter.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItem}/>
      <Filter search={filter} onCategoryChange={handleCategoryChange} onSearchChange={handleFilter}  />
      <ul className="Items">
        {newItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
