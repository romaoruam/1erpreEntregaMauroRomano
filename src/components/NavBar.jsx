// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'; // Importa el archivo de estilos específico para NavBar

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Mi Tienda</h1> {/* Nombre de la tienda */}
            </div>
            <ul className="navbar-menu">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#shop">Tienda</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <div className="navbar-cart">
                <CartWidget /> {/* Componente del carrito */}
            </div>
        </nav>
    );
};

export default NavBar;
