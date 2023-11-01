"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import React, { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Week8() {
       
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        const selectedItem = item.name.split(',')[0].trim().replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🧼|🍽️/g, '');
        setSelectedItemName(selectedItem);    
    };
    return (
        <div>
            <div className="flex ">
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </div>
        
    )
}