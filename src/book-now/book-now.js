import React, { Component } from 'react';
import axios from 'axios';
import GoogleMapWrapper from './google-map/google-map';
import TextView from './Util/TextView.js';
import { run, ruleRunner } from './Validation/ruleRunner.js'
import { required, mustMatch, minLength, validEmail } from './Validation/rules.js';
import $ from 'jquery';
import swal from 'sweetalert2';
import Spinner from 'react-spinkit';
import RenderDoubleColComponent from '../shared/render-double-col-component';
import './book-now.scss';

const fieldValidations = [
  ruleRunner("name", "Name", required),
  ruleRunner("email", "Email Address", required, validEmail),
  ruleRunner("date", "Date", required),
];

class BookNowForm extends Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      date: '',
      message: '',
      loading: false,
      showErrors: false,
      validationErrors: { },
    };
  }

  componentWillMount() {
    // Run validations on initial state
    this.setState({validationErrors: run(this.state, fieldValidations)});
  }

  formattedDate = '';

  formatDate(rawDate) {
    if (rawDate.length < 3) {
      return rawDate
    } else if (rawDate.length < 5) {
      return rawDate.substring(0,2) + '/' + rawDate.substring(2,)
    } else if (rawDate.length < 9){
      return rawDate.substring(0,2) + '/' + rawDate.substring(2,4) + '/' + rawDate.substring(4)
    }
  }

  onChange(field) {
    return (val) => {
      const state = this.state;
      let newVal = val.target.value;
      if (field  === 'date') {
        newVal = val.target.value.replace(/\//g, '');
        if (isNaN(newVal) || (newVal.length >= 9)) {
          return null
        }

        this.formattedDate = this.formatDate(newVal);
      }
      state[field] = newVal;
      state.validationErrors = run(state, fieldValidations);
      this.setState(state)
    };
  };


  errorFor(field) {
    return this.state.validationErrors[field] || "";
  }

  resetForm() {
    this.formattedDate = '';
    this.setState({
      name: '',
      email: '',
      date: '',
      message: '',
      loading: false,
      showErrors: false,
      validationErrors: { },
    });
  }

  submitOrder() {
    const { name, email, message } = this.state;
    this.setState({loading: true})

    axios({
      method: "post",
      url: "https://nm3sutzmu2.execute-api.us-east-1.amazonaws.com/devel/sendOrder",
      data: {
        body: {
          name: name,
          email: email,
          message: message,
          date: this.formattedDate
        }
      }
    }).then((response)=>{
      this.resetForm()

        if (response.data.status === 'success'){

            swal(
              'Great!',
              'A representative from Loaded Barrels BBQ will contact you about your order.',
              'success'
            );
        } else {
          swal(
            'Error',
            'Something went wrong. Please check your internet connection and try again.',
            'error'
          );
        }
    })
  }
  handleSubmit() {
    this.setState({showErrors: true});
    if ($.isEmptyObject(this.state.validationErrors) === false)  {
      console.log('errors')
        return null;
    } else {
      this.submitOrder()
    }
  }


  renderLoader() {
    return (
      <div className="loading-wrapper">
        <Spinner className="loading-wrapper__spinner" name="circle" color="#941A00"/>
      </div>
    )
  }

  renderLoader() {
    return (
      <div className="loading-wrapper">
        <Spinner className="loading-wrapper__spinner" name="circle" color="white" fadeIn="none"/>
      </div>
    )
  }

  render() {
    const { name, email, date, message } = this.state;
    const messagePlaceholder = "I am hosting a signing party for my newest work and I am in a bind for food!!! I can’t find good BBQ in the North. I need your help!!!!";
    return (
        <div className="book-now__form">

          <h5 className="book-now__form__text">NAME</h5>
          <TextView placeholder="Tom Jefferson" type="text" showError={this.state.showErrors}
                text={this.state.name} onChange={this.onChange('name')}
                errorText={this.errorFor("name")} />
          <h5 className="book-now__form__text">EMAIL</h5>
          <TextView placeholder="tj@supportindyauthors.com" type="text" showError={this.state.showErrors}
                text={this.state.email} onChange={this.onChange('email')}
                errorText={this.errorFor("email")} />
          <h5 className="book-now__form__text">DATE</h5>
          <TextView placeholder="08/02/1776" type="text" showError={this.state.showErrors}
                text={this.formattedDate} onChange={this.onChange('date')}
                errorText={this.errorFor("date")} />
          <h5 className="book-now__form__text">MESSAGE</h5>
          <textarea className="is-message" placeholder={messagePlaceholder} showError={this.state.showErrors}
                value={this.state.message} onChange={this.onChange('message')} />
          <button className="book-now__form__submit" onClick={this.handleSubmit}>
            {this.state.loading ? this.renderLoader() : <h4>SUBMIT</h4>}
          </button>

        </div>
    )
  }
};




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
          <div className="component__double-col-section">
            <BookNowForm />
            <div className="contact">
              <GoogleMapWrapper />
              <div class="information-form">
                <div class="information-form__section">
                  <img className="information-form__section__img is-phone" src={require("../assets/phone-icon.svg")} />
                  <span className="information-form__text">+1 (908) 328-4261</span>
                  <p className="information-form__subtext">Mon-Fri 8:30am - 8:00pm ET</p>
                  <p className="information-form__subtext">Sat-Sun 11:30am - 6:00pm ET</p>
                </div>
                <div class="information-form__section">
                  <img className="information-form__section__img is-mail" src={require("../assets/mail-icon.svg")} />
                  <span className="information-form__text">hello@loadedbarrelsbbq.com</span>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default BookNow;
