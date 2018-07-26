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
          .email-us {
            font-family: Basic;
            text-decoration: underline;
            color: white;
            text-shadow: 1px 1px 1px #3e3e3e;
            font-weight: bold;
            font-size: 6vw;
          }
          .contact-box h3 {
            font-family: 'Oswald', sans-serif;
          }
          .great-rates {
            font-size: 4vw;
            color: #080808;
          }
          .rates-vary {
            font-size: 2vw;
            color: #080808;
            font-weight: lighter;
          }
          .email-address {
            font-size: 3em;
            font-family: Basic;
          }
          @media screen and (max-width: 900px){
            .rates-vary {
              font-size: 3vw;
            }
          }
          @media screen and (max-width: 480px){
            .email-us {
              font-size: 10vw;
            }
            h3 {
              margin-left: 3%;
            }
            .great-rates {
              font-size: 5vw;
            }
            .rates-vary {
              font-size: 5vw;
            }
            .email-address {
              font-size: 7vw;
            }
          }
          @media screen and (max-width: 380px){
            .before-contact {
              padding-bottom: 10vh;
            }
          }
          @media screen and (max-width: 340px){
            .before-contact {
              padding-bottom: 20vh;
            }
          }

          `}</style>
      <div className="contact-container">
        <div className="contact-page-inner">
          <div className="contact-box">
            <h2 className="email-us">Email Us Today!</h2>
            <h3 className="great-rates">We offer great rates for our expert cleaning service</h3>
            <h3 className="rates-vary">Rates may vary depending on requested service, so please send your inquiries to:</h3>
            <div className="email-address">arzolanava20@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
