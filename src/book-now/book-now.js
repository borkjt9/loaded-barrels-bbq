import React, { Component } from 'react';
import axios from 'axios';
import './book-now.scss';
import TextView from './Util/TextView.js';
import { run, ruleRunner } from './Validation/ruleRunner.js'
import { required, mustMatch, minLength } from './Validation/rules.js';
import $ from 'jquery';

const fieldValidations = [
  ruleRunner("name", "Name", required),
  ruleRunner("email", "Email Address", required),
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

  submitOrder() {
    const { name, email, message } = this.state;
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
        if (response.data.msg === 'success'){
            alert("Message Sent.");
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
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

  render() {
    const { name, email, date, message } = this.state;
    const messagePlaceholder = "I am hosting a signing party for my newest work and I am in a bind for food!!! I can’t find good bbq in the North. I need your help!!!!";
    return (
      <div>
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
          <TextView placeholder="MM/DD/YYYY" type="text" showError={this.state.showErrors}
                text={this.formattedDate} onChange={this.onChange('date')}
                errorText={this.errorFor("date")} />
          <h5 className="book-now__form__text">MESSAGE</h5>
          <textarea className="is-message" placeholder={messagePlaceholder} showError={this.state.showErrors}
                text={this.state.message} onChange={this.onChange('message')} />
        </div>
        <button className="book-now__form__submit" onClick={this.handleSubmit}><h4>SUBMIT</h4></button>
      </div>
    )
  }
};

function BookNow() {
  return (
    <div className="book-now component" id="book-now">
      <h1 className="component__title">BOOK NOW</h1>
      <BookNowForm />
    </div>
  )
}

export default BookNow;
