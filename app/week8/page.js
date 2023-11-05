"use client";

import { useUserAuth } from "./_utils/auth-context";
import ItemList from "./shopping-list/item-list";
import NewItem from "./shopping-list/new-item";
import itemsData from "./shopping-list/items.json";
import React, { useState } from "react";
import MealIdeas from "./shopping-list/meal-ideas";

 
export default function Week8() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    function handleSignIn() {
        gitHubSignIn();
    }
    function handleSignOut() {
        firebaseSignOut();
    }

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
    )
}