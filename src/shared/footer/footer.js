import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
  render() {
    const copyrightText = "All Rights Reserved. Loaded Barrels BBQ 2018."
    const contactText = "(908) 328-4261.\nhello@loadedbarrelsbbq.com."
    return (
      <div className="footer">
        <div className="mediaLinks">

          <a className="mediaLink" target="_blank" href="https://twitter.com/LoadedBarrelsBBQ">
            <img src={require("../../assets/twitter-logo.png")}/>
          </a>
          <a className="mediaLink" target="_blank" href="https://www.facebook.com/LoadedBarrelsBBQ/">
            <img src={require("../../assets/facebook-logo.png")}/>
          </a>
          <a className="mediaLink" target="_blank" href="https://www.instagram.com/loadedbarrelsbbq/">
            <img src={require("../../assets/instagram-logo.png")}/>
          </a>
          <p className="footer-text is-contact">{contactText}</p>
          <p className="footer-text is-copyright">{copyrightText}</p>

        </div>
      </div>
    )
  }
}

export default Footer
