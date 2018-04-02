import React from 'react';
import Header from '../shared/header/header';
import C2A from '../c2a/c2a';
import Team from '../team/team';
import Food from '../food/food';
import Footer from '../shared/footer/footer';
import BookNow from '../book-now/book-now';

import './landing-page.scss';

function LandingPage() {
    return (
      <div className="landing-page">
        <Header />
        <C2A />
        <Team/>
        <Food />
        <BookNow />
        <Footer />
      </div>
    )
}

export default LandingPage;
