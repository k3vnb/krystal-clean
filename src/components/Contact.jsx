import React from 'react';
import instagramIcon from '../assets/images/icons/instagram-icon.png';
import skyBG from '../assets/images/sky-bg.jpg';
import gmailIcon from '../assets/images/icons/gmail-icon.png';
import linkedinIcon from '../assets/images/icons/linkedin-icon.png';
import ParallaxContactHeader from './ParallaxContactHeader';
import wallpaper from '../assets/images/body-bg.svg';



function Contact(){
  return(
    <div>
      <div className="before-contact">
        <ParallaxContactHeader />
      </div>

      <style jsx>{`
          .before-contact {
            padding-bottom: 6%;
          }
          .contact-container {
            height: 90vh;
            border-bottom: 5.6vh solid #3b3b3b;
            position: relative;
          }
          .contact-page-inner {
            width: 100%;
            height: 100%;
            display: flex;
            background-size: cover;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-end;
          }
          .contact-box {
            width: 100%;
            height: 70%;
            padding: 5%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: #f16b98;
          }


          `}</style>
      <div className="contact-container">
        <div className="contact-page-inner">
          <div className="contact-box contact-top-left">
            <h2>Contact Us Today!</h2>
            <h3>We offer great rates for our expert cleaning service</h3>
            <h3>Rates may vary depending on requested service, so please send your inquiries to:</h3>
            <div>email arzolanava20@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
