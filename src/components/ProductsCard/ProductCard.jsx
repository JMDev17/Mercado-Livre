import React, { useContext } from 'react';
import './ProductCards.css'
import { BsCartPlusFill } from 'react-icons/bs'
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/Appcontext';

function ProductCard({ data }) {
    
    const { title, thumbnail, price} = data;

    const {cartItems, setCartItems} = useContext(AppContext);

    const handleAddCart = () => setCartItems([ ...cartItems, data])


    
    return(
    <section className='productCard'>
        <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
         alt="product" className='cardImage' />
 
       <div className='cardInfo'>
        <h2 className='cardPrice'>{formatCurrency(price, 'BRL')}</h2>
        <h2 className='cardTitle'>{title}</h2>
       </div>

       <button type='button' className='buttonACard' onClick={ handleAddCart}>
        <BsCartPlusFill />
       </button>

    </section>
    )
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape([]),
} .isRequired;