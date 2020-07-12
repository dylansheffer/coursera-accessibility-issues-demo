import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import '../scss/style.scss';

const Layout = props => (
    <React.Fragment>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          <a href="#main" className="skip-link">Skip to Main Content</a>
          <main id="main">
            {props.children}
          </main>
          <Header />
        </div>
        <Footer />
        <SubFooter />
      </div>
    </React.Fragment>
);

export default Layout;
