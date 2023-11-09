import React, { useContext } from "react";
import { BsCartXFill } from 'react-icons/bs'
import propTypes from 'prop-types';
import './cartItem.css'
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/Appcontext";

function CartItem ({ data }) {


  const { cartItems, setCartItems} = useContext(AppContext);
  const { id, thumbnail, title, price } = data;
  const handleRemoveItem = () => {
     
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  }

    return(
        <section className="cartItem">
            <img
            src={thumbnail}
            alt="imagem do produto"
            className="cartItemImage"
            />

            <div className="cartItemContent">
                <h3 className="cartItemTitle">{title}</h3>
                <h3 className="cartItemPrice">{formatCurrency(price)}</h3>

                <button 
                type="button"
                className="buttonRemove" onClick={ handleRemoveItem}><BsCartXFill /></button>
            </div>



        </section>
    )
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;