import React from 'react';
import renderSingleColComponent from '../shared/render-single-col-component';
import './food.scss';

function Food() {

  const sectionInput = {
    'title': 'THE FOOD',
    'sections': [
      {
        'desc': 'We should probably write something here about how our meats are hickory-smoked to perfection, or how our sauces are bourbon-infused, but we’ll let the food do the talking.'}
    ]
  }

  const foodDesc = "We should probably write something here about how our meats are hickory-smoked to perfection, or how our sauces are bourbon-infused, but we’ll let the food do the talking."
  return (
    <div className="food component" id="the-food">
      {renderSingleColComponent(sectionInput)}
    </div>
  )
}

export default Food;
