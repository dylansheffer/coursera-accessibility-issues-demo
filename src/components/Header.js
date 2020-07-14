import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logo from '../images/logo.svg';
import logoMobile from '../images/logo-mobile.svg';
import MenuMobile from './MenuMobile';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = (menuActive) => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    const badAltText = 'After your kickoff call, the search engine optimization team begins digging in. Our process uses a variation of keyword research, google analytic data, competitive analysis, and other tools and tactics that help us determine what improvements will be most profitable for your business. A great SEO company never pretends to know your business better than you. What we can promise is that we will take your goals in your language and translate that into actionable plans. Before your campaign begins, we\'ll organize a kickoff call between you and our team. We\'ll discuss the goals and objectives you\'d like to achieve, as well as explain our processes and initial plan for your custom SEO strategy. Once our research is complete, a unique optimization strategy is crafted to meet the specific goals that your organization needs to achieve success. Our SEO experts will ensure that our campaign plans align with your expectations and desired outcome. Once your custom SEO plan is fully developed, the team gets to work on rolling out a schedule and plan of attack for the duration of your campaign. We provide monthly ranking reports to constantly keep you updated on our progress. Custom traffic and conversion reports are also made available to the customer as needed.';
    return (
      <div className="header">
        <div className="container">
          <div className="logo" role="navigation">
            <Link to="/">
              <img alt={badAltText} src={logo} />
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img alt={badAltText} src={logoMobile} />
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default Header;
