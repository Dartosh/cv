import React from 'react';
import Nav from '../nav/nav';
import photo from '../../assets/img/photo.png';
import './header.css';

const Header = () => {
    return(
        <header>
            <img src="https://i.imgur.com/HOwo3cA.png" alt="It is me"/>
            <h1><span>Antony</span> Klintsov</h1>
        </header>
    );
}

export default Header;