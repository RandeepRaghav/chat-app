import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search contacts"
      />
    </div>
  );
}

export default SearchBar;
