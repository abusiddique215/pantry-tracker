'use client'
import React, { useState, useEffect } from 'react';

export default function PantryTracker() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem && quantity) {
      setItems([...items, { name: newItem, quantity: parseInt(quantity) }]);
      setNewItem('');
      setQuantity('');
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between sm:p-24 p-4 bg-gray-100'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm'>
        <h1 className='text-4xl p-4 text-center text-gray-800'>Pantry Tracker</h1>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <form className='grid grid-cols-6 items-center text-gray-800' onSubmit={handleSubmit}>
            <input
              className='col-span-3 p-3 border border-gray-300 rounded'
              type='text'
              placeholder='Enter Item'
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <input
              className='col-span-2 p-3 border border-gray-300 rounded mx-3'
              type='number'
              placeholder='Enter Quantity'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              className='text-white bg-blue-500 hover:bg-blue-600 p-3 text-xl rounded'
              type='submit'
            >
              +
            </button>
          </form>
          <ul>
            {items.map((item, index) => (
              <li key={index} className='my-4 w-full flex justify-between bg-gray-50 rounded'>
                <div className='p-4 w-full text-gray-800 flex justify-between'>
                  <span className='capitalize'>{item.name}</span>
                  <span>{item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}