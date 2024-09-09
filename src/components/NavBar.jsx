// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget'; // Importa CartWidget

const NavBar = () => {
    return (
        <nav>
            <h1>Mi Tienda</h1> {/* Nombre de la tienda */}
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#shop">Tienda</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <CartWidget /> {/* Renderiza CartWidget */}
        </nav>
    );
};

export default NavBar;
