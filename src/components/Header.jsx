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
              font-family: 'Oswald', sans-serif;
              color: #2f2f2f;
              position: sticky;
              top: 0px;
            }
            .header-title {
              padding: 1% 3%;
            }
            .header-title h1 {
              text-shadow: .5px .5px .5px #ffffffc2;
            }
            .header-title h2 {
              font-size: 1.1em;
              color: #2f2f2f;
              font-weight: lighter;
            }
            .slideshow {
              height: 75vh;
              border-top: 2px solid yellow;
              position: relative;
            }
            .slideshow-overlay {
              color: white;
              font-size: 3em;
              text-shadow: 1px 1px 2px black;
              position: absolute;
              height: 99%;
              top: 0%;
              left: 65%;
              background-color: #00000070;
              padding: 3% 10%;
              font-family: Basic;
            }
            .slideshow-overlay li {
              list-style: none;
              margin-bottom: 10%;
              padding-bottom: 2%;
              border-bottom: .5px solid white;
            }
            .logo {
              margin: 1%;
              padding-left: 1%;
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
            @media screen and (max-width: 735px){
              .slideshow-overlay {
                left: 50%;
              }
            }
            @media screen and (max-width: 630px){
              .header-title h1 {
                font-size: 4.2vw;
              }
              .header-title h2 {
                font-size: .9em;
              }
            }
            @media screen and (max-width: 480px){
              .header-title h1 {
                font-size: 1.6em;
              }
              .header-title h2 {
                font-size: .8em;
              }
              .slideshow-overlay {
                padding-top: 20%;
                left: 0%;
              }
            }
            @media screen and (max-width: 380px){
              .header-title h1 {
                font-size: 1em;
              }
              .slideshow-overlay {
                font-size: 2.7em;
              }
            }
            @media screen and (max-width: 330px){
              .slideshow-overlay {
                font-size: 2.5em;
              }
            }
            `}</style>
        <div className="header-container">
          <div className="header-top">
            <div className="logo">
              <img src={logo} alt="Krystal Clean PDX"/>
            </div>
            <div className="header-title">
              <h1>Krystal Clear Cleaning Service, LLC</h1>
              <hr />
              <h2>Professional Home Cleaning Services in the Portland, OR area</h2>
            </div>
          </div>
          <div className="slideshow">
            <Fade
              images={images}
              duration={8000}
              transitionDuration={1000}
              />
            <ul className="slideshow-overlay">
              <li>Regular Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Eco-Friendly Cleaning</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
