import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import { BadForm } from '../../components/BadContactForm';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-1">Contact</div>
          </div>
        </div>
      </div>
    </div>
    <BadForm />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>
        <div className="col-8">
          <div className="title-3 mt-4">Business Hours</div>
          <table className="table table-sm opening-hours-table">
            <tbody>
              <tr>
                <td className="day font-weight-bold">Monday</td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Tuesday</td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Wednesday</td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Thursday</td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Friday</td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Saturday</td>
                <td className="opens">Closed</td>
                <td />
                <td className="closes" />
              </tr>
              <tr>
                <td className="day font-weight-bold">Sunday</td>
                <td className="opens">Closed</td>
                <td />
                <td className="closes" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
