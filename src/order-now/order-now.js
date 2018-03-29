import React, { Component } from 'react';

import axios from 'axios';
import aws from 'aws-sdk';
import sgMail from '@sendgrid/mail';

import './order-now.scss';


class OrderNowForm extends Component {
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

  handleSubmit(event) {
  }
        // axios({
        //     method: "POST",
        //     url:"http://localhost:3000/send",
        //     data: {
        //         name: name,
        //         email: email,
        //         messsage: message
        //     }
        // }).then((response)=>{
        //     if (response.data.msg === 'success'){
        //         alert("Message Sent.");
        //         this.resetForm()
        //     }else if(response.data.msg === 'fail'){
        //         alert("Message failed to send.")
        //     }
        // })
  // }

  render() {
    const { name, email, date, message } = this.state;

    return (
      <div>
        <form className="order-now__form">
          <h5 className="order-now__form__text">NAME</h5>
          <input className="order-now__form__input" type="text" name="name" value={name} onChange={this.onChange} />
          <h5 className="order-now__form__text">EMAIL</h5>
          <input className="order-now__form__input" type="text" name="email" value={email} onChange={this.onChange} />
          <h5 className="order-now__form__text">DATE</h5>
          <input className="order-now__form__input" type="text" name="date" value={date} onChange={this.onChange} />
          <h5 className="order-now__form__text is-message">MESSAGE</h5>
          <input className="order-now__form__input" type="text" name="message" value={message} onChange={this.onChange} />
        </form>
        <button className="order-now__form__submit" onClick={this.handleSubmit}><h4>SUBMIT</h4></button>
      </div>
    )
  }
};

function OrderNow() {
  return (
    <div className="order-now component">
      <h1 className="component__title">ORDER NOW</h1>
      <OrderNowForm />
    </div>
  )
}

export default OrderNow;
