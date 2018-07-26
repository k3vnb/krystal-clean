import React from 'react';
import vacuum1 from '../assets/images/vacuum1.png';
import { Parallax } from 'react-scroll-parallax';


const ParallaxContactHeader = () => (
  <Parallax
    className="contact-parallax-container1"
    offsetXMax={10}
    offsetXMin={-10}
    slowerScrollRate
    tag="figure"
  ><style jsx>{`
    .contact-parallax-container1 {
      margin-top: 5%;
      margin-bottom: 15%;
    }
      .contact-banner-container {
        position: relative;
      }

      .contact-title {
        color: #33b5a7;
        text-shadow: 1px 1px 1px #000000c2;
        font-family: 'Oswald', sans-serif;
        position: absolute;
        top: 0%;
        right: 16%;
      }
      .contact-title img {
        max-height: 200px;
      }
      @media screen and (max-width: 380px){
        .contact-title img {
          max-height: 150px;
        }
      }
      @media screen and (max-width: 330px){
        .contact-title img {
          max-height: 150px;
        }
        .disp-none-sm-scrn {
          display: none;
        }
      }
      `}</style>
    <div className="contact-banner-container">

      <h1 className="contact-title"><img src={vacuum1} alt="portland's best vacuuming"/>Contact <span className="disp-none-sm-scrn">Us</span></h1>
    </div>

  </Parallax>
);

export default ParallaxContactHeader;
