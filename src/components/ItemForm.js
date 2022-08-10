import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: "",
    category: "",
  };

  

  return (
    <form className="NewItem" onSubmit ={(e)=> {
      e.preventDefault()
      onItemFormSubmit(newItem)}}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e)=>newItem.name = e.target.value} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e)=>newItem.category = e.target.value}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
