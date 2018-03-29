import React from 'react';
import './c2a.scss';

const backgroundImg = require("../assets/landing-page-background.jpg");


function C2A() {
  return (
    <div className="c2a">
      <img className="c2a__background-img" src={backgroundImg} />
      <div className="c2a__focus vert-center">
        <div className="vert-center__child padding-hor-10">
          <h2 className="c2a__focus__title">Award-winning New Jersey BBQ</h2>
          <p className="c2a__focus__caption">Home of mouth-watering, house-smoked <b>Chicken BizzlePop<sup>&copy;</sup></b></p>
          <button className="c2a__focus__btn">
            <h4 className="btn-text">
              Order Now
            </h4>
          </button>
        </div>
      </div>
  </div>

  )
}

export default C2A;
