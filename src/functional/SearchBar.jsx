import React, { useEffect, useState } from 'react';


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const useDebounce = (callback, delay) => {
    const [debouncedCallback, setDebouncedCallback] = useState(() => callback);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedCallback(() => callback);
      }, delay);
  
      return () => clearTimeout(timer);
    }, [callback, delay]);
  
    return debouncedCallback;
  };


  const debouncedSearch = useDebounce((term) => {
    onSearch(term);
  }, 500);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
