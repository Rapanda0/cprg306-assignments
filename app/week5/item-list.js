"use client";

import Item from "./item.js";
import React, { useState } from "react";
import Items from "./items.json";


export default function ItemList() {
    const [sortBy, setSortby] = useState('name');
    console.log(Items);   
    const changeSortby = (changedSortby) => {
        setSortby(changedSortby);
    }
    const ItemList = [...Items];
    if (sortBy === 'name') {
        ItemList.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
// wasnt necessary to add a quantity filter, I was just curious about if I could do it
    } else if (sortBy === 'quantity') {
        ItemList.sort((a, b) => {
            return a.quantity - b.quantity;
        });
    } else if (sortBy === 'category') {
        ItemList.sort((a, b) => {
            return a.category.localeCompare(b.category);
        });
    }

    return (
        <main>
        <h1>Shopping List (im too lazy to style this)</h1> 
        <div className='flex justify-center'>
            <button className='bg-pink-600 font-comic-sans text-white font-bold py-2 px-4 mx-3 rounded'
            onClick={() => changeSortby('name')}>SORT BY NAME</button>   
            <button className='bg-pink-600 font-comic-sans text-white font-bold py-2 px-4 mx-3 rounded'
            onClick={() => changeSortby('quantity')}>SORT BY QUANTITY</button>
            <button className='bg-pink-600 font-comic-sans text-white font-bold py-2 px-4 mx-3 rounded'
            onClick={() => changeSortby('category')}>SORT BY CATEGORY</button>
        </div>
        <ul>
            {ItemList.map((item) => {
                return <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            })}
        </ul>
        </main>
    )
}