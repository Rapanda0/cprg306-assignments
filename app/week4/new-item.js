"use client";

import React, { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name: name,
            quantity: quantity,
            category: category
        };

        console.log(newItem);

        alert(`Submitting ${name} ${quantity} ${category}`);

        setName('');
        setQuantity('');
        setCategory('');
        };

    return (
        <main>
            <div className='min-h-screen flex justify-center items-center'>
                <form onSubmit = {handleSubmit}>
                    <label className='flex justify-center font-comic-sans text-pink-600 text-6xl'
                    >Name</label>
                    <input className='flex w-full h- font-comic-sans text-black text-3xl'
                        required
                        id='name'
                        type='text'
                        value={name}
                        onChange={handleNameChange}
                    />
                    <label className='flex justify-center font-comic-sans text-6xl'
                    >Quantity</label>
                    <input className='flex w-full h- font-comic-sans text-black text-3xl'
                        required
                        id='quantity'
                        type='number'
                        value={quantity}
                        onChange={handleQuantityChange}
                        min='1' max='99'
                    />
                    <label className='flex justify-center font-comic-sans text-6xl'
                    >Category</label>
                    <select className='flex w-full h- font-comic-sans text-black text-3xl'
                        id='category'
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option value='produce'>Produce</option>
                        <option value='meat'>Meat</option>
                        <option value='dairy'>Dairy</option>
                        <option value='bakery'>Bakery</option>
                        <option value='canned goods'>Canned Goods</option>
                        <option value='dry goods'>Dry Goods</option>
                        <option value='household'>Household</option>
                        <option value='other'>Other</option>
                    </select>
                    <button className='flex w-full justify-center font-comic-sans hover:bg-pink-800 text-pink-600 text-6xl'
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    )
    }