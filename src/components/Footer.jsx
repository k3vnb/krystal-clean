import React from 'react';

function Footer(){

  let footerLeftStyleSheet = {
    position: 'absolute',
    bottom: 4,
    left: 8,
  };
  let footerRightStyleSheet = {
    position: 'fixed',
    bottom: 2,
    right: 10,
  };
  return (
    <div className="footer-container">
      <style jsx>{`
          .footer-container {
            position: relative;
            color: white;
            font-family: 'Didact Gothic', sans-serif;
            font-size: 10px;
            text-shadow: -.5px .5px 1px black;
          }
          a {
            color: white;
          }
          @media screen and (max-width: 430px){
            .display-none-sm-scrn {
              display: none;
            }
            .footer-left {
              font-size: 8.5px;
            }
          }
          `}</style>
      <div style={footerRightStyleSheet}>
        <h3>Krystal Clear Cleaning</h3>
      </div>
      <div style={footerLeftStyleSheet}>
        <h3 className="footer-left">site <span className="display-none-sm-scrn">design </span> by <a href="http://pdxwebdev.io" alt="Kevin Boyle, PDX Web Dev">PDX Web Dev</a></h3>
      </div>
    </div>
  );
}

export default Footer;
