import React from 'react';

function renderDoubleColComponent(input) {
  const subSections = [];
  input.sections.forEach((section, index) => {
    if (index % 2) {
      const subSection = (
        <div className="component__double-col-section row-wrap-reverse">
          <div className="component__double-col-section__text-group">
          <h3 className="component__double-col-section__text-group__title">{section.textGroup.title}</h3>
          <p className="component__double-col-section__text-group__desc">
            {section.textGroup.desc}
          </p>
        </div>
        <div className="component__double-col-section__img-group">
          <img className="component__double-col-section__img-group__img" src={require("../assets/team-photo.jpg")} />
          <p className="component__double-col-section__img-group__desc">
            {section.imgGroup.desc}
          </p>
        </div>
        </div>
      );
      subSections.push(subSection);
    } else {
      const subSection = (
        <div className="component__double-col-section row-wrap">
          <div className="component__double-col-section__img-group">
            <img className="component__double-col-section__img-group__img" src={require("../assets/polar-plunge.jpg")} />
            <p className="component__double-col-section__img-group__desc">
              {section.imgGroup.desc}
            </p>
          </div>
          <div className="component__double-col-section__text-group">
            <h3 className="component__double-col-section__text-group__title">{section.textGroup.title}</h3>
            <p className="component__double-col-section__text-group__desc">{section.textGroup.desc}</p>
        </div>
        </div>
      );
      subSections.push(subSection);
    }
  });
  return (
    <div>
      <h1 className="component__title">
        {input.title}
      </h1>
      <div className="component__body">
        {subSections}
      </div>
    </div>
  );
};

export default renderDoubleColComponent;
