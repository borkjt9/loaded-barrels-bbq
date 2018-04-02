import React from 'react';
import renderDoubleColComponent from '../shared/render-double-col-component';

import './team.scss';
function Team() {

  const whereItBeganSection = {
    'imgGroup': {
      'caption': 'Pitmaster Mike smoking wings for the Seaside Heights Polar Plunge'
    },
    'textGroup': {
      'title': 'Where it all began',
      'desc': 'A few years ago Mike was a New Jersey detective who liked to smoke BBQ for friends on weekends.\n\nWhile Mike is still a New Jersey detective who smokes BBQ for friends on weekends, his number of friends seems to have gotten a lot larger.'
    }
  };

  const familyFirstSection = {
      'imgGroup': {
        'caption': 'Loaded Barrels\' setup at our very first competion. We have come a long way.'
      },
      'textGroup': {
        'title': 'Family First',
        'desc': 'Loaded Barrels is first-and-foremost a family-run business. At events you will see Mike and his brother John working hand-in hand. While Mike mans the smoker John prepares the fixins.\n\nBBQ just seems to taste better when family is involved.'
      }
    };
    const sectionsInput = {
      'title': 'THE TEAM',
      'sections': [
        {
          'imgGroup': {
            'caption': 'Pitmaster Mike smoking wings for the Seaside Heights Polar Plunge',
            'url': '../assets/team-photo.jpg'
          },
          'textGroup': {
            'title': 'Where it all began',
            'desc': 'A few years ago Mike was a New Jersey detective who liked to smoke BBQ for friends on weekends.\n\nWhile Mike is still a New Jersey detective who smokes BBQ for friends on weekends, his number of friends seems to have gotten a lot larger.'
          }
        },
        {
          'imgGroup': {
            'caption': 'Loaded Barrels\' setup at our very first competion. We have come a long way.',
            'url': '../assets/polar-plunge.jpg'
          },
          'textGroup': {
            'title': 'Family First',
            'desc': 'Loaded Barrels is first-and-foremost a family-run business. At events you will see Mike and his brother John working hand-in hand. While Mike mans the smoker John prepares the fixins.\n\nBBQ just seems to taste better when family is involved.'
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
