import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemForm({ itemId, onSave }) {
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    if (itemId) {
      axios.get(`http://localhost:8080/items/${itemId}`)
        .then(response => setItemName(response.data.name))
        .catch(error => console.error('Error fetching item:', error));
    }
  }, [itemId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name: itemName };
    if (itemId) {
      axios.put(`http://localhost:8080/items/${itemId}`, item)
        .then(() => onSave())
        .catch(error => console.error('Error updating item:', error));
    } else {
      axios.post('http://localhost:8080/items', item)
        .then(() => onSave())
        .catch(error => console.error('Error creating item:', error));
    }
  };

  return (
    <div>
      <h2>{itemId ? 'Edit' : 'Create'} Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          required
        />
        <button type="submit">{itemId ? 'Update' : 'Create'} Item</button>
      </form>
    </div>
  );
}

export default ItemForm;
