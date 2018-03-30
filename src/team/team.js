import React from 'react';

import './team.scss';
function Team() {
  const beginningsDesc = 'A few years ago Mike was a New Jersey detective who liked to smoke BBQ for friends on weekends.\n\nWhile Mike is still a New Jersey detective who smokes BBQ for friends on weekends, his number of friends seems to have gotten a lot larger.';
  const familyDesc = 'Loaded Barrels is first-and-foremost a family-run business. At events you will see Mike and his brother John working hand-in hand. While Mike mans the smoker John prepares the fixins.\n\nBBQ just seems to taste better when family is involved.';
  const competitionDesc = 'Loaded Barrels got its start on the Kansas City BBQ competition circuit, and continues to compete in a few competitions every year.\n\nThe competitions are a way for the team to relax and bond over some good BBQ, which is what it\'s all about.';
  return (
    <div className="team component is-top" id="the-team">
      <h1 className="component__title">THE TEAM</h1>
      <div className="component__body">
        <div className="component__double-section row-wrap">
          <div className="component__double-section__img-group">
            <img className="component__double-section__img-group__img" src={require("../assets/polar-plunge.jpg")} />
            <p className="component__double-section__img-group__desc">
              Pitmaster Mike smoking wings for the Seaside Heights Polar Plunge
            </p>
          </div>

          <div className="component__double-section__text">
          <h3 className="component__double-section__text__title">Where it all began</h3>
          <p className="component__double-section__text__desc">{beginningsDesc}</p>
        </div>
        </div>
        <div className="component__double-section row-wrap-reverse">


          <div className="component__double-section__text">
          <h3 className="component__double-section__text__title">Family First </h3>
          <p className="component__double-section__text__desc">
            {familyDesc}
          </p>
        </div>
        <div className="component__double-section__img-group">
          <img className="component__double-section__img-group__img" src={require("../assets/team-photo.jpg")} />
          <p className="component__double-section__img-group__desc">
            Loaded Barrels' setup at our very first competion. We have come a long way.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Team;
