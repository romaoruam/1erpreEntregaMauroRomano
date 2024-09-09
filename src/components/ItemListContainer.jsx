// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h2>{greeting}</h2> {/* Mensaje de bienvenida */}
        </div>
    );
};

export default ItemListContainer;
