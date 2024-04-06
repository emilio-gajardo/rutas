import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const PanelControl = () => {
    return (
        <>
            <h1>Panel de Control</h1>
            <nav>
                <ul>
                    <li><NavLink to='/panel/inicio'>Inicio</NavLink></li>
                    <li><NavLink to='/panel/crear-articulos'>Crear artículos</NavLink></li>
                    <li><NavLink to='/panel/gestion-usuarios'>Gestión usuarios</NavLink></li>
                    <li><NavLink to='/panel/acerca-de'>Acerca de</NavLink></li>
                </ul>
            </nav>

        <div>
            {/* cargar componentes de subrutas o rutas anidadas */}
            <hr/>
            <Outlet />
        </div>

        </>
    );
}