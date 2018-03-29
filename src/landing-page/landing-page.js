import React, { Component } from 'react';
import Header from '../header/header';
import C2A from '../c2a/c2a';
import Team from '../team/team';
import Food from '../food/food';
import './landing-page.scss';
import OrderNow from '../order-now/order-now';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Header />
        <C2A />
        <Team />
        <Food />
        <OrderNow />
      </div>
    )
  }
}

export default LandingPage;
