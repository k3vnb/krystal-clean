import React, { Component } from 'react';
import emblem from '../assets/images/emblem.svg';
import { Slide, Fade } from 'react-slideshow-image';

// import vacuum from 'assets/slideshow/vacuum.jpg';
import bathroom from '../assets/slideshow/bathroom.jpg';
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
            }
            .slideshow {
              height: 75vh;
              border: 1px solid grey;
            }
            .logo {
              margin: 1% 0%;
              max-height: 180px;
              margin-left: 3%;
              border: 1px solid blue;
              height: 185px;
              width: 185px;
              display: flex;
              justify-content: center;
              border-radius: 50%;
              background-color: white;
            }
            .logo img {
              height: 100%;
            }
            `}</style>
        <div className="header-container">
          <div className="header-top">
            <div className="logo">
              <img src="http://res.cloudinary.com/kboyle/image/upload/v1532152426/krystalclean1.png" alt="Krystal Clean PDX"/>
            </div>
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
