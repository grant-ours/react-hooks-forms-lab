import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [itemName, setItemName] = useState("");
  const [currentCategory, setCurrentCategory] = useState("Produce");
  function handleSubmit(e) {
    e.preventDefualt();
    const newItem = {
      id: uuid(),
      name: itemName,
      currentCategory: currentCategory,
    };
  }
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
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
