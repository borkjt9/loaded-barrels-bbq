import React from 'react';

import './food.scss';

function Food() {

  const foodDesc = "We should probably write something here about how our meats are hickory-smoked to perfection, or how our sauces are bourbon-infused, but we’ll let the food do the talking."
  return (
    <div className="food component" id="the-food">
      <h1 className="component__title">
        THE FOOD
      </h1>
      <div className="component__single-section">
        <p className="component__single-section__text">{foodDesc}</p>
        <div className="component__single-section__img-group">
          <img className="component__single-section__img-group__img" src={require('../assets/food-mosaic.jpg')}/>
        </div>
      </div>
    </div>
  )
}

export default Food;
