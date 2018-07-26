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
            height: 100vh;
            border-bottom: 5.6vh solid #3b3b3b;
            position: relative;
          }
          .contact-page-inner {
            width: 100%;
            height: 100.5%;
            display: flex;

            background-size: cover;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
          .contact-box {
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .icon {
            height: 17vw;
            transition: height .2s ease-out;
          }
          .icon:hover {
            height: 16.1vw
          }
          .github-icon, .instagram-icon, .linkedin-icon {
            border-radius: 23%;
            box-shadow: 3px 2px 8px #0000008c;

          }
          .contact-top-left {
            background-color: #e91e63a8;
          }
          .contact-top-right {
            background-color: #2196f36e;
          }
          .contact-bottom-left {
            background-color: #8bc34a69;
          }
          .contact-bottom-right {
            background-color: #ff9800ad;
          }
          `}</style>
      <div className="contact-container">
        <div className="contact-page-inner">
          <div className="contact-box contact-top-left">
            <div>email arzolanava20@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
