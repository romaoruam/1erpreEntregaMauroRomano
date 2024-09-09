// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar'; // Importa NavBar desde la carpeta components
import ItemListContainer from './components/ItemListContainer'; // Importa ItemListContainer

const App = () => {
    return (
        <div>
            <NavBar /> {/* Renderiza NavBar */}
            <ItemListContainer greeting="¡Bienvenido a MiTienda!" /> {/* Renderiza ItemListContainer */}
        </div>
    );
};

export default App;
