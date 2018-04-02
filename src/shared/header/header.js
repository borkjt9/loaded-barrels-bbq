import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import './header.scss';

const logo = require('../../assets/logo.png');

class Header extends Component {
  animParams = {offset: -130, duration: 400}

  getAnimParams() {
    return this.animParams;
  }

  renderWithHashLinks() {

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
    return (
      <div>
      {this.renderWithHashLinks()}
      </div>
    )
  }

}

export default Header;
