import React, {Component} from 'react';
import axios from 'axios';
import { run, ruleRunner } from './Validation/ruleRunner.js'
import { required, mustMatch, minLength, validEmail } from './Validation/rules.js';
import swal from 'sweetalert2';
import Spinner from 'react-spinkit';
import isEmpty from 'lodash/isEmpty';

import TextView from './Util/TextView.js';
import formatDate from '../../shared/functions';
import './book-now-form.scss';

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

  formattedDate = '';

  componentWillMount() {
    // Run validations on initial state
    this.setState({validationErrors: run(this.state, fieldValidations)});
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
  };

  handleSubmit() {
    this.setState({showErrors: true});
    if (isEmpty(this.state.validationErrors) === false)  {
        return null;
    } else {
      this.submitOrder()
    }
  };

  renderLoader() {
    return (
      <div className="book-now__form__loading-wrapper">
        <Spinner className="book-now__form__loading-wrapper__spinner" name="circle" color="white" fadeIn="none"/>
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

export default BookNowForm;
