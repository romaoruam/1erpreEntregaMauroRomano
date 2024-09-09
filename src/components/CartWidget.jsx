// src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
    const itemCount = 5; // Número de elementos en el carrito (hardcodeado por ahora)
    
    return (
        <div>
            <i className="cart-icon">🛒</i> {/* Icono del carrito */}
            <span>{itemCount}</span> {/* Número de elementos en el carrito */}
        </div>
    );
};

export default CartWidget;
