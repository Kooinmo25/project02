import React, { useState } from 'react';

function InputBox({ list, setFilteredProducts }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        filterProducts(searchTerm);
    };

    const filterProducts = (searchTerm) => {
        const filteredProducts = list.filter(product => product.title.includes(searchTerm));
        setFilteredProducts(filteredProducts);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                value={searchTerm} 
                onChange={handleChange} 
            />
            <button onClick={handleSearch}>검색</button>
        </div>
    );
}

export default InputBox;
