import React from 'react';
import icon from '../assets/images/icon.png';
import guarantee from '../assets/images/satisfaction.png';
function About() {

  return(
    <div className="main-container about-container">
      <style jsx>{`
          .main-container {
            font-family: 'Carrois Gothic', sans-serif;
            min-height: 120vh;
            margin-bottom: 55vw;
          }
          .icon-img, .icon-img2 {
            height: 300px;
          }
          .icon-img2 {
            transform: rotateY(180deg);
            filter: hue-rotate(-20deg);
          }
          .about-upper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 20%;
            width: 100%;
            margin: 8% 0%;
          }
          .about-upper-half {
            width: 33%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2%;
            margin-bottom: 5%;
          }
          .about-upper-left {
          }
          .about-upper-middle {
            margin-left: 1%;
            margin-right: 1%;
            display: flex;
            align-items: center;
            font-size: 1.5vw;
          }
          .about-upper-right {
            margin-left: 1%;
            display: flex;
            align-items: center;
            font-size: 1.5vw;
          }
          .guarantee {
            max-height: 400px;
          }
          .about-lower {
            width: 120%;
            margin-left: -10%;
          }

          .leader-text {
            font-size: 2.5vw;
            margin-left: -4px;
          }
          .leader-text2 {
            font-size: 2.15vw;
          }
          .about-lower {
            font-size: 1.7vw;
          }

          .main-container p {
            margin-bottom: 5%;
          }

          @media screen and (max-width: 460px){
            .main-container {
              margin-bottom: 80vw;
              margin-top: 5vh;
              }
            }
          }
            `}</style>
      <div className="about-upper">
        <div className="">
          <img className="icon-img" src={icon}/>
        </div>
        <div className="">
          <img className="guarantee" src={guarantee} alt="100% Satisfaction Guarantee" />
        </div>
        <div className="">
          <img className="icon-img2" src={icon}/>
        </div>
      </div>
      <div className="about-lower">
        <div className="card-container">
          <div className="card">
            <div className="card-top">
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default About;
