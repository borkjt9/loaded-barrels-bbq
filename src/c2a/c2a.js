import React from 'react';
import Scrollchor from 'react-scrollchor';
import './c2a.scss';

const backgroundImg = require("../assets/landing-page-background.jpg");


function C2A() {
  const animParams = {offset: -130, duration: 400}

  return (
    <div className="c2a">
      <img className="c2a__background-img" src={backgroundImg} />
      <div className="c2a__focus vert-center">
        <div className="vert-center__child padding-hor-10">
          <h2 className="c2a__focus__title">Award-winning New Jersey BBQ</h2>
          <p className="c2a__focus__caption">Home of mouth-watering, house-smoked <b>Chicken BizzlePop<sup>&copy;</sup></b></p>
          <Scrollchor to="#book-now" animate={animParams} className="header_c2a">
          <button className="c2a__focus__btn">
            <h4 className="btn-text">
              BOOK NOW
            </h4>
          </button>
        </Scrollchor>
        </div>
      </div>
  </div>

  )
}

export default C2A;
