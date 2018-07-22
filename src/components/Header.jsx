import React, { Component } from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import logo from '../assets/images/main-logo.png';
// import vacuum from 'assets/slideshow/vacuum.jpg';
// import mop from 'assets/slideshow/mop.jpg';
// import bathroom from 'assets/slideshow/bathroom.jpg';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navOpacityFull: false
    };
  }

  render(){

    const images = [
      'http://res.cloudinary.com/kboyle/image/upload/c_scale,w_3686/v1532159129/kitchen.jpg',
      'http://res.cloudinary.com/kboyle/image/upload/c_scale,w_3577/v1532159126/mop.jpg',
      'http://res.cloudinary.com/kboyle/image/upload/c_scale,w_2398/v1532159126/bathroom.jpg',
      'http://res.cloudinary.com/kboyle/image/upload/c_scale,w_2398/v1532159126/vacuum.jpg'
    ];
    return (
      <div className="header-and-nav">
        <style jsx>{`
            .header-and-nav {
              height: 100vh;
              border-bottom: 5px solid yellow;
            }
            .header-top {
              height: 25vh;
              width: 100%;
              background-color: #71e6d9;
              display: flex;
              align-items: center;
              justify-content: space-around;
              font-family: Basic;
              color: #2f2f2f;
            }
            .slideshow {
              height: 75vh;
              border: 1px solid grey;
            }
            .logo {
              margin: 1% 0%;
              max-height: 180px;
              border: 1px solid #00ffe1;
              height: 185px;
              width: 185px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              background-color: white;
            }
            .logo img {
              height: 120%;
            }

            `}</style>
        <div className="header-container">
          <div className="header-top">
            <div className="logo">
              <img src={logo} alt="Krystal Clean PDX"/>
            </div>
            <h2>Professional Home Cleaning Services in the Portland, OR area</h2>
          </div>
          <div className="slideshow">
            <Fade
              images={images}
              duration={8000}
              transitionDuration={1000}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
