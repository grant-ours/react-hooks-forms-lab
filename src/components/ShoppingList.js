import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [input, setInput] = useState("");
  const [itemName, setItemName] = useState("");
  const [currentCategory, setCurrentCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefualt();
    const newObj = {
      name: itemName,
      currentCategory: currentCategory,
    };
    setNewItem(e.target.value);
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleFilterChange(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  const searchResults = items.filter((item) => {
    return item.name.toLowerCase().includes(input.toLowerCase());
  });

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onSubmit={handleSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleFilterChange}
      />
      <ul className="Items">
        {input === ""
          ? itemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : searchResults.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
