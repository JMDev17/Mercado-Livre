import React, { useState } from "react";
import AppContext from "./Appcontext";
import propTypes from 'prop-types';




function Provider( { children } ) {
    
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState ([])
    const [isCartVisible, setIsCartVisible] = useState (false)
    const [loading, setLoading] = useState(true);

    const value = {products, setProducts, loading, setLoading, cartItems, setCartItems, isCartVisible, setIsCartVisible, };

    return(
        <AppContext.Provider value={ value }>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;