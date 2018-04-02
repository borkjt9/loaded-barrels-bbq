import React from 'react';

function renderSingleColComponent(input) {
  const subSections = [];
  input.sections.forEach((section, index) => {
    const subSection = (
      <div className="component__single-section combonent__body">
        <p className="component__single-section__text">{section.desc}</p>
        <div className="component__single-section__img-group">
          <img className="component__single-section__img-group__img" src={require('../assets/food-mosaic.jpg')}/>
        </div>
      </div>
    )
    subSections.push(subSection);
  });

  return (
    <div>
      <h1 className="component__title">
        {input.title}
      </h1>
      {subSections}
    </div>
  )

};

export default renderSingleColComponent;
