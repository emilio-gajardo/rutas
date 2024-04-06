import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <>
            <h1>Error 404</h1>
            <p>Site not found</p>
            <Link to='/inicio'>Volver</Link>
        </>
    );
}