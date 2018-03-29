import React from 'react';

import './team.scss';
function Team() {
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
          <p className="component__double-section__text__desc">Mike is the asfjkslasfasfasd
            asl dfjaskjd lfjasldf ;fjdkalsjfrqwe qwhjrkq askjfldfjkas ;dfas ladfjke wr quwr io
            dasjfasklfhd</p>
        </div>
        </div>
        <div className="component__double-section row-wrap-reverse">


          <div className="component__double-section__text">
          <h3 className="component__double-section__text__title">Where it all began</h3>
          <p className="component__double-section__text__desc">Mike is the asfjkslasfasfasd
            asl dfjaskjd lfjasldf ;fjdkalsjfrqwe qwhjrkq askjfldfjkas ;dfas ladfjke wr quwr io
            dasjfasklfhd</p>
        </div>
        <div className="component__double-section__img-group">
          <img className="component__double-section__img-group__img" src={require("../assets/team-photo.jpg")} />
          <p className="component__double-section__img-group__desc">
            Loaded Barrel's setup at our first Kansas City BBQ Competition.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Team;
