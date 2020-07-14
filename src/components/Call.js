import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = props => (
  <div className="call">
    <div className="call-box-top">
      <div className="call-phone">
        <strong>Phone: </strong>
        <a href={`tel:${props.data.site.siteMetadata.contact.phone}`}>
        {props.data.site.siteMetadata.contact.phone}
        </a>
      </div>
      <div className="call-email">
        <strong>Email: </strong>
        <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
          {props.data.site.siteMetadata.contact.email}
        </a>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <div onClick={() => window.location.href = '/contact'} className="button">
          <div className="container">
            <h5>Talk to us</h5>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
