import React, { useState, useEffect } from 'react';

const SearchAndFilter = () => {
  const fruits = [
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Orange", color: "Orange" },
    { id: 4, name: "Grapes", color: "Purple" },
    { id: 5, name: "Kiwi", color: "Green" }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredList = fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFruits(filteredList);
  }, [searchTerm, fruits]);

  return (
    <div>
      <h2>Search and Filter Fruits</h2>
      <input type="text" placeholder="Search fruits..." value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredFruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name} - {fruit.color}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAndFilter;
