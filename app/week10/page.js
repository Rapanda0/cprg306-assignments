"use client";
import { useUserAuth } from "./_utils/auth-context";
import ItemList from "./shopping-list/item-list";
import NewItem from "./shopping-list/new-item";
import React, { useState, useEffect } from "react";
import MealIdeas from "./shopping-list/meal-ideas";
import { getItems, addItem } from "./_services/shopping-list-service";

export default function Week10() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleSignIn() {
    gitHubSignIn();
  }

  function handleSignOut() {
    firebaseSignOut();
  }

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);

      newItem.id = newItemId;

      setItems([...items, newItem]);

      console.log(`Item added successfully with ID: ${newItemId}`);
    } catch (error) {
      console.error('Error adding item to shopping list:', error);
    }
  };

  const handleItemSelect = (item) => {
    const selectedItem = item.name.split(',')[0].trim().replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🧼|🍽️/g, '');
    setSelectedItemName(selectedItem);
  };

  const loadItems = async () => {
    if (user) {
      try {
        const items = await getItems(user.uid);
        setItems(items);
      } catch (error) {
        console.error('Error loading items:', error);
      }
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]); 

  return (
    <div>
      <div>
        <button onClick={handleSignIn}>Sign In</button>
        {user && (
          <div>
            <p>
              signed in as: <strong> {user.displayName}</strong> 
            </p>
            <button onClick={handleSignOut}>Sign Out</button>

            <div>
              <div className="flex ">
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
                <MealIdeas ingredient={selectedItemName}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
