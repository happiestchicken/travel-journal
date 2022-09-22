import '../styles.css';
import React from 'react';

function Header() {
    return (
        <div className='header'>
            <i class="globe-icon fa-solid fa-earth-americas"></i>
            <p className="header-text">My Travel Journal</p>    
        </div>
    )
}

export {Header}