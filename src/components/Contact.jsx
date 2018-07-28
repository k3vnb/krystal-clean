import React from 'react';
import ParallaxContactHeader from './ParallaxContactHeader';
import phone1 from '../assets/images/icons8-phone-48.png';
import env from '../assets/images/icons8-env40.png';



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
            padding: 4% 5%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: #f16b98;
          }
          .contact-today {
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

          .contact-line {
            display: flex;
            min-height: 50px;
            align-items: center;
          }
          .contact-line a {
            margin-right: 5%;
          }

          .icon-img {
            max-height: 48px;
            margin-right: 5%;
            transition: transform .3s;
          }
          .icon-img:hover {
            transform: scale(1.1);
          }
          .contact-line:first-child {
            margin: 5% 0%;
          }
          .email-address, .phone-number {
            color: #252525;
            text-shadow: .5px .5px 1px #903d3d;
            line-height: 50px;
            font-size: 3em;
            font-family: Basic;
          }
          @media screen and (max-width: 900px){
            .contact-box {
              padding: 8% 5%;
            }
            .rates-vary {
              font-size: 3vw;
            }
          }
          @media screen and (max-width: 580px){
            .email-address, .phone-number {
              font-size: 7vw;
            }
          }
          @media screen and (max-width: 480px){
            .contact-box {
              padding: 7% 5%;
            }
            .contact-today {
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
            .email-address, .phone-number {
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
            <h2 className="contact-today">Contact Us Today!</h2>
            <h3 className="great-rates">We offer great rates for our expert cleaning service</h3>
            <h3 className="rates-vary">Rates may vary depending on requested service, so please send your inquiries to:</h3>
            <div className="phone-email-box">
              <div className="phone">
                <div className="contact-line">
                  <a href="tel:1-503-405-2230" title="call Portland's premier housekeeper service">
                    <img className="icon-img" src={phone1} alt="phone" title="phone Oregon's best housekeeping company"/>
                  </a>
                  <div className="phone-number">
                    503-405-2230
                  </div>
                </div>
              </div>
              <div className="email-address">
                <div className="contact-line">
                  <a href="mailto:arzolanava20@gmail.com" title="email house cleaning service in Gresham and Portland Oregon"> <img className="icon-img" src={env} alt="email PDX's best houe cleaning service" title="email best housekeepers in Portland, OR"/> </a>
                  <div>
                    arzolanava20@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
