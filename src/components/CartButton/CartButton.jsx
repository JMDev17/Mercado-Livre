import React, { useContext } from 'react';
import './cartButton.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import AppContext from '../../context/Appcontext';


function CartButton() {

   const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

    return(
        <button type='button' className='cartButton' onClick={() => setIsCartVisible(!isCartVisible)}>
            <AiOutlineShoppingCart />
            <span className='cartStatus'>{cartItems.length}</span>
        </button>
    )
}

export default CartButton;