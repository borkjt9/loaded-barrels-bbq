import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import {slide as Menu} from 'react-burger-menu';

import './header.scss';

const logo = require('../../assets/logo.png');

class Header extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      menuOpen: false,
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    // this.handleStateChange = this.handleStateChange.bind(this);

  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};

  getAnimParams() {
    return this.animParams;
  }


  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  // handleStateChange () {
  //   this.setState({menuOpen: this.state.isOpen})
  // }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  renderMobileHeader() {
    const animParams = {offset: -170, duration: 400}
    const {menuOpen} = this.state;
    return (
      <div className="header">
        <Menu isOpen={menuOpen}>
          <Scrollchor to="#the-team" animate={animParams}>
          <a onClick={this.closeMenu} className="header__section-link">
            <h4>THE TEAM</h4>
          </a>
          </Scrollchor>
          <Scrollchor to="#the-food" animate={animParams}>
          <a onClick={this.closeMenu} className="header__section-link">
            <h4>THE FOOD</h4>
          </a>
          </Scrollchor>
          <Scrollchor to="#book-now" animate={animParams} className="header_c2a">
            <a onClick={this.closeMenu} className="header__section-link">
              <h4>BOOK NOW</h4>
            </a>
          </Scrollchor>
        </Menu>
        <img className="mobile-logo" alt="Loaded Barrels BBQ logo" src={logo}/>
        <div className="header__mobile-home-link__border" />
        <div className="header__section-wrapper" />
      </div>
    )
  }
  renderWithHashLinks() {
    const animParams = {offset: -130, duration: 400}


    return (
      <div className="header">
        <div className="header__home-link">
          <a href="../home">
            <img alt="Loaded Barrels BBQ logo" src={logo}/>
          </a>
        </div>
        <div className="header__home-link__border" />
          <div className="header__section-wrapper">
          <div className="header__section-links text--vert-middle">
            <Scrollchor to="#the-team" animate={this.animParams}>
            <a className="header__section-link">
              <h4>THE TEAM</h4>
            </a>
            </Scrollchor>
            <Scrollchor to="#the-food" animate={this.animParams}>
            <a className="header__section-link">
              <h4>THE FOOD</h4>
            </a>
            </Scrollchor>
            <a className="header__section-link" href="https://www.redbubble.com/people/loadedbarrels?asc=u">
              <h4>THE MERCH</h4>
            </a>
            <button>
              <Scrollchor to="#book-now" animate={this.animParams} className="header_c2a">
                <h4>BOOK NOW</h4>
              </Scrollchor>
            </button>
          </div>
          </div>
      </div>
    )
  };

  renderWithLinks() {

  }
  render() {
    const { width } = this.state;
    const isMobile = width <= 750;
    console.log('width: ', width)
    // the rest is the same...
    return (
      <div>
      {isMobile ? this.renderMobileHeader(): this.renderWithHashLinks()}
      </div>
    )
  }

}

export default Header;
