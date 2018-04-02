import React from 'react';
import Header from '../shared/header/header';
import Footer from '../shared/footer/footer';
import './menu.scss';
const backgroundImg = require("../assets/landing-page-background.jpg");
const menuImg = require("../assets/menu.png");


function Menu() {
  return (
    <div className="menu">
    <Header />
    <div className="menu__body">
      <img className="menu__body__menu-img" src={menuImg} />
    </div>
    <Footer />
    </div>
  )
}

export default Menu;
