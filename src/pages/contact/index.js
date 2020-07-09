import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

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
    <div className="container bad-form">
      <div className="row">
        <div className="col-12">
          <div className="title-3">Send Us A Message</div>
          <div>
            <div className="row">
              <div className="col-6">
                <p>Name</p>
                <input type="text" autoComplete="serif-name" />
              </div>
              <div className="col-6">
                <p>Email</p>
                <input type="text" autoComplete="email" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>Body</p>
              <textarea name="" id="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="button" onClick={() => alert('Message Sent')}>Send Message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
