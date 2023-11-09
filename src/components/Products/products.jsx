import React, { useEffect, useContext } from 'react';
import './products.css'
import fetchProduct from '../../API/fetchProduct';
import ProductCard from '../ProductsCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/Appcontext';

function Products() {

   const { products, setProducts, loading, setLoading } = useContext(AppContext);
   


   useEffect(() => {
    
   fetchProduct('iphone').then((response) => {
    setProducts(response);
    setLoading(false);
    

   });

   }, []);


    return(
        
        (loading && <Loading /> ) || ( 
        <section className='products container'>
        {products.map((product) => <ProductCard key={product.id} data={product} />)}

        </section>)
    )
}

export default Products;