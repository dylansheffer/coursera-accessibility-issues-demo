/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';

export const BadForm = () => {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [body, setBody] = useState(' ');
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [bodyValid, setBodyValid] = useState(false);
  const [sent, setSent] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const validate = () => {
    let nameValidLocal = false;
    let emailValidLocal = false;
    let bodyValidLocal = false;
    if (name.includes(' ')) {
      setNameValid(true);
      nameValidLocal = true;
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email)) {
      setEmailValid(true);
      emailValidLocal = true;
    }

    if (body.length > 50) {
      setBodyValid(true);
      bodyValidLocal = true;
    }

    return nameValidLocal && emailValidLocal && bodyValidLocal;
  };

  return (
    <div className="container bad-form">
      <div className="row">
        <div className="col-12">
          <div className="title-3">Send Us A Message</div>
          {sent ? <p className="success form-message">Message Sent! (actually... it's not submitting anything anywhere)</p> : ''}
          <p>Fill out the form below and click the submit button. Be sure to include your full name and a valid email address. Once the form has been submitted, we will get back to you in 2 to 3 business days.</p>
            <form>
            <div className="row">
              <div className="col-6">
                <h6>Name</h6>
                <input onBlur={validate} onChange={handleName} id="name-input" type="text" autoComplete="serif-name" />
                <p className={`small ${!nameValid ? 'error' : ''}`}>{!nameValid ? 'Enter your name' : ''}</p>
              </div>
              <div className="col-6">
                <h6>Email</h6>
                <input onBlur={validate} onChange={handleEmail} id="email-input" type="text" autoComplete="email" />
                <p className={`small ${!emailValid ? 'error' : ''}`}>{!emailValid ? 'Enter a valid email address' : ''}</p>
              </div>
            </div>
          <div className="row">
            <div className="col-12">
              <h6>Body</h6>
              <textarea onBlur={validate} onChange={handleBody} name="" id="body-input" onBlur={(e) => {
                e.preventDefault();
                if (validate()) {
                  setSent(true);
                } else {
                  setSent(false);
                }
              }}/>
              <p className={`small ${!bodyValid ? 'error' : ''}`}>{!bodyValid ? 'We are not accepting small messages in this form' : ''}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a href="#" className="button" onClick={(e) => {
                e.preventDefault();
                if (validate()) {
                  setSent(true);
                } else {
                  setSent(false);
                }
              }}>
                Send Message
              </a>
            </div>
          </div>
            </form>
        </div>
      </div>
    </div>
  );
};
