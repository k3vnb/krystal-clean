import React from 'react';
import nav_logo from '../assets/images/nav-logo.png';




class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      servicesLinkIsUnderlined: false,
      contactLinkIsUnderlined: false
    };
    this.state.navOpacityFull = false;
    this.makeOpaque = this.makeOpaque.bind(this);
    this.checkViewPort = this.checkViewPort.bind(this);
  }
  componentDidMount () {
    window.addEventListener('scroll', this.makeOpaque);
    window.addEventListener('scroll', this.checkViewPort);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkViewPort);
  }

  makeOpaque() {
    if (document.documentElement.scrollTop > 400 || window.pageYOffset > 400) {
      this.setState({navOpacityFull: true});
    } else {
      this.setState({navOpacityFull: false});
    }
  }
  checkViewPort(){

    if (window.innerWidth > 450){
      if (window.scrollY < 1900) {
        this.setState({servicesLinkIsUnderlined: true});
        this.setState({contactLinkIsUnderlined: false});
      } else if (window.scrollY > 1900){
        this.setState({servicesLinkIsUnderlined: false});
        this.setState({contactLinkIsUnderlined: true});
      }
    } else if (window.innerWidth < 450){
      if (window.scrollY < 900) {
        this.setState({servicesLinkIsUnderlined: false});
        this.setState({contactLinkIsUnderlined: false});
      } else if (window.scrollY > 900 && window.scrollY < 2000){
        this.setState({servicesLinkIsUnderlined: true});
        this.setState({contactLinkIsUnderlined: false});
      } else if (window.scrollY > 2000){
        this.setState({servicesLinkIsUnderlined: false});
        this.setState({contactLinkIsUnderlined: true});
      }
    }
  }
  render(){
    function scrollToPage(pageSelector) {
      const goToPage = document.querySelector(pageSelector);
      const toElement = (element) => {
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      };
      toElement(goToPage);
    }
    function scrollToTop(){
      window.scrollTo({
        top: 10,
        behavior: 'smooth',
        block: 'start'
      });
    }



    return(
      <div className={this.state.navOpacityFull ? 'topbar-on' : 'topbar-off'}>
        <style jsx>{`
          .topbar-on {
            position: fixed;
            top: -.5%;
            left: 0%;
            width: 100%;
            opacity: 1;
            background-color: white;
            border-bottom: .5px solid #9afff2;
            height: 7.8vh;
            transition: opacity .5s ease-in;
          }
          .topbar-off {
            position: fixed;
            top: -.5%;
            left: 0%;
            width: 100%;
            opacity: 0;
            background-color: white;
            border-bottom: .5px solid #9afff2;
            height: 7.8vh;
          }
          .topbar-links-container-off {
            height: 100%;
            width: 80%;
            z-index: -5;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-animation: become-transparent .2s;
                    animation: become-transparent .2s;
            margin-left: 5%;
          }
          .topbar-links-container-on {
            height: 100%;
            width: 80%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-animation: become-opaque 2s;
                    animation: become-opaque 2s;
            margin-left: 5%;
          }
          .nav-links-right {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            width: 35%;
            margin-left: 5%;
          }
          .nav-link-underline {
            border-bottom: 1px solid #87fff1;
            border-top: 1px solid #87fff1;
            animation: 1s underline ease-in;
          }
          .nav-link-reverse-underline {
            border-bottom: 0px solid #87fff1;
            animation: .5s reverse-underline ease-in;
          }
          @keyframes underline {
            from {
              border-bottom: 0px solid #87fff1;
              border-top: 0px solid #87fff1;
            }
            to {
              border-bottom: 1px solid #87fff1;
              border-top: 1px solid #87fff1;
            }
          }
          @keyframes reverse-underline {
            from {
              border-bottom: 1px solid #87fff1;
              border-top: 1px solid #87fff1;
            }
            to {
              border-bottom: 0px solid #87fff1;
              border-top: 0px solid #87fff1;
            }
          }
          .nav-link-topbar {
            color: #4c4943;
            font-family: 'Oswald', sans-serif;
            font-size: 2vw;
            -webkit-transition: text-shadow .1s;
            -o-transition: text-shadow .1s;
            transition: text-shadow .1s;
          }
          .nav-link-topbar:hover {
            cursor: pointer;
            -webkit-transform: scale(1.015);
                -ms-transform: scale(1.015);
                    transform: scale(1.015);
            text-shadow: .5px .5px 0px #0202029c;
          }
          .nav-link-topbar:active {
            -webkit-transform: scale(1.025);
                -ms-transform: scale(1.025);
                    transform: scale(1.025);
            text-shadow: 0px 1px 5px #ffee0087;
          }
          .logo {
            max-height: 200px;
            -o-object-fit: contain;
               object-fit: contain;
            margin-bottom: 1vh;
            margin-left: 5vw;
          }

          @-webkit-keyframes become-opaque {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes become-opaque {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @-webkit-keyframes become-transparent {
            from {
              opacity: .8;
            }
            to {
              opacity: 0;
            }
          }
          @keyframes become-transparent {
            from {
              opacity: .8;
            }
            to {
              opacity: 0;
            }
          }
          @media screen and (max-width: 500px){
            .logo {
              margin-left: 0vw;
            }

            .nav-link-topbar {
              font-size: 16px;
            }
            .nav-links-right {
              width: 65%;
              margin-left: 0;
            }
          }
          @media screen and (max-width: 480px){
            .logo {
              max-height: 150px;
            }
          `}</style>
        <div className={this.state.navOpacityFull ? 'topbar-links-container-on' : 'topbar-links-container-off'}>
          <div>
            <div className="nav-link-topbar" onClick={() => scrollToTop()}>
              <img className="logo" src={nav_logo} alt="Krystal Clean PDX"/>
            </div>
          </div>
          <div className="nav-links-right">
            <div className={this.state.servicesLinkIsUnderlined ? 'nav-link-topbar nav-link-underline' : 'nav-link-topbar nav-link-reverse-underline'} title="go to services section" onClick={() => scrollToPage('.services-container')}>
              Services
            </div>
            <div className={this.state.contactLinkIsUnderlined ? 'nav-link-topbar nav-link-underline' : 'nav-link-topbar nav-link-reverse-underline'} title="go to contact section" onClick={() => scrollToPage('.contact-container')}>
              Contact
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
