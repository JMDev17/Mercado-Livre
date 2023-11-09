import React, { useContext } from "react";
import './cart.css'
import CartItem from '../cartItem/CartItem';
import AppContext from "../../context/Appcontext";
import formatCurrency from "../../utils/formatCurrency";

function Cart () {
   
    const { cartItems, isCartVisible } = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, item) => {
        return item.price + acc;
    }, 0)


    return(
        <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            <div className="cartItems"> { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
            </div> 
            <div className="cartResumo">{formatCurrency(totalPrice, 'BRL')}</div>

            
        </section>
    )
}

export default Cart;