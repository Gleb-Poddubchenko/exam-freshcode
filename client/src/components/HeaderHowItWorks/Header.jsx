
import React from 'react';
import './Header.module.sass';

const Header = () => (
  <header className="header">
    <div className="header__logo">My Logo</div>
    <nav className="header__nav">
      <a href="#how-it-works">How it Works</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact Us</a>
    </nav>
  </header>
);

export default Header;