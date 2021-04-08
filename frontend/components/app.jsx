import React from 'react';
import WelcomeContainer from './session/welcome_container';
import { Link, Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import HeaderLogo from './header_logo';


export default () => (
  <section className="main">
    <header className="site-header">
        <nav className="header-nav">
          <span>Explore</span>
        </nav>
        <HeaderLogo />
        <WelcomeContainer />
    </header>
    <section className="main-section">
      <Switch>
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <Route exact path='/' component={SplashContainer} />
        <div className="search-bar-container">
          <h1>Pick a new Adventure</h1>
          <input className="search-bar" type="text" name="" id=""/>
        </div>
      </Switch>
    </section>
    <footer className="footer">
      <Link to="/" className="logo-link">
        <img className="logo" src={window.logoURL} />
        <span>TrailMagic</span>
      </Link>
      <div className="icons-container">
        <span>Find me on</span>
        <div className="icons">
          <a href="https://www.linkedin.com/in/everett-smith-924798153">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/evrtt">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

    </footer>
  </section>
);