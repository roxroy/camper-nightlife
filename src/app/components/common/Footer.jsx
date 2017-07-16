import React from 'react';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="page-footer orange">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Company Bio</h5>
            <p className="grey-text text-lighten-4">Distinctio odio officia nostrum et nemo. Omnis et eum dolorem hic nobis nihil. Et delectus accusamus et placeat odio architecto earum illum. Nihil et animi explicabo velit assumenda quia quia.</p>

          </div>
          <div className="col l3 s12">
            <h5 className="white-text">About Us</h5>
            <ul>
              <li><a className="white-text" href="#!">Career</a></li>
              <li><a className="white-text" href="#!">Social Responsibility</a></li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Connect</h5>
            <ul>
              <li><a className="white-text" href="#!">Facebook</a></li>
              <li><a className="white-text" href="#!">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
         Made by <a className="white-text text-lighten-3" href="/">BarMeetup Software</a> | © Copyright 2017. All rights reserved.
         <a className="white-text text-lighten-4 right" href="https://github.com/roxroy/camper-nightlife"> <i className="fa fa-github" aria-hidden="true"></i> Project code</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
