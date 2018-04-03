import React, { Component } from 'react';
import BookNowForm from './book-now-form/book-now-form';
import GoogleMapWrapper from './google-map/google-map';
import RenderDoubleColComponent from '../shared/render-double-col-component';
import './book-now.scss';

function BookNow() {
  const bookDesc = 'Loaded Barrels BBQ caters to corporate and private events in the tri-state area. ';
  return (
    <div className="book-now component" id="book-now">
      <h1 className="component__title">BOOK NOW</h1>
      <div className="component__single-section component__body">
        <div className="inline-block">
          <p
            className="component__single-section__text">
            {bookDesc}
            <a
              className="link"
              target="blank"
              rel="noopener noreferrer"
              href="/menu">
               Click here to view a sample menu.
            </a>
          </p>
        </div>
          <div className="component__double-col-section row-wrap">
            <BookNowForm />
            <div className="book-now__contact">
              <GoogleMapWrapper />
              <div class="book-now__contact__information-form">
                <div class="book-now__contact__information-form__section">
                  <img className="book-now__contact__information-form__section__img is-phone" src={require("../assets/phone-icon.svg")} />
                  <span className="book-now__contact__information-form__text">+1 (908) 328-4261</span>
                  <p className="book-now__contact__information-form__subtext">Mon-Fri 8:30am - 8:00pm ET</p>
                  <p className="book-now__contact__information-form__subtext">Sat-Sun 11:30am - 6:00pm ET</p>
                </div>
                <div class="book-now__contact__information-form__section">
                  <img className="book-now__contact__information-form__section__img is-mail" src={require("../assets/mail-icon.svg")} />
                  <span className="book-now__contact__information-form__text">hello@loadedbarrelsbbq.com</span>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default BookNow;
