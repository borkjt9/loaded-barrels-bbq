import React, { Component } from 'react';

import axios from 'axios';
import aws from 'aws-sdk';
import sgMail from '@sendgrid/mail';

import './book-now.scss';


class BookNowForm extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      date: '',
      message: '',
    };
  }

  onChange = (val) => {
    const state = this.state;
    state[val.target.name] = val.target.value;
    this.setState(state)
    console.log(this.state)
  };

  handleSubmit() {
    const { name, email, date, message } = this.state;
    axios({
      method: "post",
      url: "https://nm3sutzmu2.execute-api.us-east-1.amazonaws.com/devel/sendOrder",
      data: {
        body: {
          name: name,
          email: email,
          message: message,
          date: date
        }
      }
    }).then((response)=>{
      console.log(response)
        if (response.data.msg === 'success'){
            alert("Message Sent.");
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  }

  render() {
    const { name, email, date, message } = this.state;

    return (
      <div>
        <form className="book-now__form">
          <h5 className="book-now__form__text">NAME</h5>
          <input className="book-now__form__input" type="text" name="name" value={name} onChange={this.onChange} />
          <h5 className="book-now__form__text">EMAIL</h5>
          <input className="book-now__form__input" type="text" name="email" value={email} onChange={this.onChange} />
          <h5 className="book-now__form__text">DATE</h5>
          <input className="book-now__form__input" type="text" name="date" value={date} onChange={this.onChange} />
          <h5 className="book-now__form__text is-message">MESSAGE</h5>
          <input className="book-now__form__input" type="text" name="message" value={message} onChange={this.onChange} />
        </form>
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
