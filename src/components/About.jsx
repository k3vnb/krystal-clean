import React from 'react';
import icon from '../assets/images/icon.png';
import guarantee from '../assets/images/satisfaction.png';
function About() {

  return(
    <div className="main-container about-container">
      <style jsx>{`
          .subheader-text {
            text-align: center;
            font-family: 'Concert One', cursive;
            color: #008784;
            font-size: 25px;
            padding-bottom: 50px;
          }
          .subheader-text-2 {
            padding-top: 5%;
          }
          .main-container {
            min-height: 100vh;
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
            justify-content: center;
            height: 20%;
            width: 150%;
            margin: 8% -25%;
          }

          .guarantee {
            max-height: 400px;
          }
          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .card {
            width: 30%;
            border: 1px solid #7d7d7d;
            height: 500px;
            font-family: Base;
            box-shadow: 2px 3px 4px #00000075;
          }
          .card-title {
            height: 30%;
            color: white;
            padding: 5%;
            text-shadow: .5px .5px .5px black;
            background-color: #33b5a7;
            font-size: 1.5em;
            border-bottom: 1px solid black;
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
          }
          .card-bottom {
            height: 70%;
            padding: 10% 2%;
            font-size: 1.08em;
          }
          .card-bottom ul {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
          }
          .card-bottom li {
            list-style: circle;
          }
          @media screen and (max-width: 900px){
            .main-container {
              margin-bottom: 80vh;
            }
            .subheader-text {
              font-size: 20px;
            }
            .card {
              width: 120%;
              height: 33%;
              margin: 5% -5%;
              margin-bottom: 5%;
            }
            .card-bottom {
              padding: 5% 2%;
              font-size: 1em;
            }
            .card-bottom ul {
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .card-bottom li {
              width: 47.5%;
              padding-left: 5%;
            }
            .card-bottom li:nth-child(odd) {
              margin-right: 1%;
            }
            .card-bottom li:nth-child(even) {
              margin-left: 1%;
            }
            .guarantee {
              max-height: 360px;
            }
          }
          @media screen and (max-width: 700px){
            .main-container {
              margin-bottom: 55vh;
            }
            .icon-img, .icon-img2 {
              display: none;
            }
          }
          @media screen and (max-width: 480px){
            .card-bottom {
              font-size: .9em;
            }
            .main-container {
              margin-bottom: 40vh;
            }
          }
          @media screen and (max-width: 380px){
            .subheader-text {
              font-size: 16px;
            }
            .main-container {
              margin-bottom: 60vh;
            }
            @media screen and (max-width: 330px){
              .subheader-text {
                font-size: 14px;
              }
              .main-container {
                margin-bottom: 85vh;
              }
              `}</style>

            <div className="subheader-text">
              <h2>Trusted professional cleaning services for houses, apartments, and condominiums in Portland and Gresham.</h2>
            </div>
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
            <div className="subheader-text">
              <h2>Our Services Include:</h2>
            </div>
            <div className="about-lower">
              <div className="card-container">
                <div className="card">
                  <div className="card-title">
                    Living Rooms, Bed Rooms, Etc.
                  </div>
                  <div className="card-bottom">
                    <ul>
                      <li>Dusting all surfaces</li>
                      <li>Dusting wall art, pictures, fixtures, etc</li>
                      <li>Wiping surfaces</li>
                      <li>Wiping furniture</li>
                      <li>Cleaning baseboards</li>
                      <li>Sanitizing</li>
                      <li>Vacuuming</li>
                      <li>Clearing garbage</li>
                      <li>Etc</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-title">
                    Bathrooms
                  </div>
                  <div className="card-bottom">
                    <ul>
                      <li>Sanitizing & Cleaning toilets, base</li>
                      <li>Cleaning & shining chrome fixtures</li>
                      <li>Cleaning tub, shower, shower doors, sinks</li>
                      <li>Dusting & Wiping fixtures</li>
                      <li>Spot cleaning</li>
                      <li>Mopping floor</li>
                      <li>Washing mirror & countertops</li>
                      <li>Etc</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-title">
                    Kitchens
                  </div>
                  <div className="card-bottom">
                    <ul>
                      <li>Sanitizing & Wiping all surfaces</li>
                      <li>Cleaning chairs/tables/stools</li>
                      <li>Exterior cleaning of cabinets</li>
                      <li>Exterior polishing of fridge, stove, dishwasher</li>
                      <li>Interior & exterior microwave cleaning</li>
                      <li>Wiping appliances</li>
                      <li>Taking out garbage</li>
                      <li>Mopping the floor</li>
                      <li>Spot Cleaning</li>
                      <li>Etc</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="subheader-text">
                <h2 className="subheader-text-2">... And More! Contact us today for pricing estimates and scheduling inquiries. </h2>
              </div>

            </div>
          </div>
        );
      }

      export default About;
