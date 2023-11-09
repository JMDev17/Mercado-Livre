import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import fetchProduct from '../API/fetchProduct';
import AppContext from '../context/Appcontext';


function SearchBar() {
  
   const { setProducts, setLoading } = useContext(AppContext);
   const [searchValue, setSearchValue] = useState ('');
   
   
   const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProduct(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');

   };

     return(
                    <form className='searchBar' onSubmit={handleSearch}>
                <input type="Search" 
                placeholder='Buscar produtos...' 
                className='searchInput' 
                onChange={ ({ target }) => setSearchValue(target.value) }
                 required />
                     
                <button type='submit' className='searchButton'>
                <BsSearch />
                </button>
            </form>
     )
}

export default SearchBar;