import React from 'react';
import renderDoubleColComponent from '../shared/render-double-col-component';

import './team.scss';
function Team() {

    const sectionsInput = {
      'title': 'THE TEAM',
      'sections': [
        {
          'imgGroup': {
            'desc': 'Pitmaster Mike smoking wings for the Seaside Heights Polar Plunge',
            'url': '../assets/team-photo.jpg'
          },
          'textGroup': {
            'title': 'Where it all began',
            'desc': 'Back in their wilder days, Mike and his buddies would rent a beach house in Manasquan, NJ for the Summer. While their days were spent on the beach, nights were spent cooking up BBQ on “Pebble Beach”, aka their backyard.\n\nMost days Mike would man the grill. One day he let one of his friends give it a shot. It did not go well.\n\nMike swore he would never make that mistake again.'
          }
        },
        {
          'imgGroup': {
            'desc': 'Loaded Barrels\' setup at our very first competion. Wide eyes and full hearts.',
            'url': '../assets/polar-plunge.jpg'
          },
          'textGroup': {
            'title': 'Battle Tested',
            'desc': 'Since those \'Pebble Beach\' days, Loaded Barrels BBQ has come a long way. We are now a competition BBQ team and full-service Catering Company to serve the greater New Jersey area.\n\nFrom our in-house, slow smoked pork ribs and chicken pops, to all of our homemade sides, Loaded Barrels BBQ has dedicated itself to providing the best BBQ in the business.'
          }
        }
      ]
    }
  return (
    <div className="team component" id="the-team">
        {renderDoubleColComponent(sectionsInput)}
    </div>
  )
}

export default Team;
