import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yudan Su</h2>
        <p><a href="mailto:michael.l.dangelo@gmail.com">yudansu4@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Yudan. I like building things.
        I am a graduate student at <a href="https://www.usfca.edu/">University of San Francisco</a>. Before joining USF
        , I worked for a real estate company as a accountant.
        I got to know computer science and decided to quit my job
        , come to US, start my new chapter here.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yudan Su <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
