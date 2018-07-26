import React from 'react';
import vacuum1 from '../assets/images/vacuum1.png';
import { Parallax } from 'react-scroll-parallax';


const ParallaxContactHeader = () => (
  <Parallax
    className="contact-parallax-container1"
    offsetXMax={0}
    offsetXMin={-40}
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
      .contact-banner {
        height: 250px;
        width: 100%;
        opacity: .3;
        object-fit: cover;
      }

      .contact-title {
        color: #20fee5;
        text-shadow: 1px 1px 1px #000000c2;
        font-family: 'Didact Gothic', sans-serif;
        position: absolute;
        top: 0%;
        right: 16%;
      }
      .contact-title img {
        max-height: 200px;
      }
      `}</style>
    <div className="contact-banner-container">

      <h1 className="contact-title"><img src={vacuum1} alt="portland's best vacuuming"/>Contact</h1>
    </div>

  </Parallax>
);

export default ParallaxContactHeader;
