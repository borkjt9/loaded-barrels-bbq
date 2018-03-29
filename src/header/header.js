import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import './header.scss';

const logo = require('../assets/logo.png');

class Header extends Component {

  render() {
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
            <Scrollchor to="#team" animate={{offset: -90, duration: 300}}>
            <a onClick={this.selectTeam} className="header__section-link">
              <h4>THE TEAM</h4>
            </a>
            </Scrollchor>
            <Scrollchor to="#food">
            <a onClick={this.selectFood} className="header__section-link">
              <h4>THE FOOD</h4>
            </a>
            </Scrollchor>
            <button onClick={this.orderNow} >
              <Scrollchor to="#order-now" className="header_c2a">
                <h4>ORDER NOW</h4>
              </Scrollchor>
            </button>
          </div>
          </div>
      </div>
    )
  };

}

export default Header;
