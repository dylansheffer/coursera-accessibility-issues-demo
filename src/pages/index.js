import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import { BadForm } from '../components/BadContactForm';
import GoogleLogo from '../images/client-logos/Google_logo.svg';
import MicrosoftLogo from '../images/client-logos/Microsoft_logo.svg';
import WalmartLogo from '../images/client-logos/Walmart_logo.svg';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>Serif - Accessibility Testing Business Site.</h1>
          <p>
            We will be testing this site against
            {' '}
            <a href="https://accessibilityinsights.io/docs/en/web/overview">Microsoft's Accessibility Insights plugin</a>
            . Throughout the project,
{' '}
<span className="bold">we will uncover and document the site's accessibility issues</span>
.
          </p>
        </div>
      </div>

      <div className="container pt-2">
        <Call button />
      </div>

      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h3 className="title-3 text-dark mb-3">Our Services</h3>
          </div>
          {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content" id="card">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                  <p><Link to={edge.node.frontmatter.path}>Read More..</Link></p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/services">
              View All Services
            </Link>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h3 className="title-3 text-dark mb-4">Our Features</h3>
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-4">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <BadForm />
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div>
          <h3 className="title-3 text-dark mb-4">Satisfied Customers</h3>
          <div className="logos">
            <img src={GoogleLogo} />
            <img src={MicrosoftLogo} />
            <img src={WalmartLogo} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
