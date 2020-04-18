import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Experience from '../components/Experience';
import './Home.css';

function Home() {
  return (
    <div class="home">
      <section class="section">
        <div class="hero is-large is-center">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 id="hero-welcome">Hi, I'm</h1>
              <h1 id="hero-title">Tom Vo</h1>
              <h2 id="hero-subtitle">
                I'm a Software Engineer and I like to build web-apps.
              </h2>
            </div>
            <div class="container has-text-centered">
              <div class="columns is-mobile is-multiline is-centered">
                <div class="column is-narrow">
                  <p class="bd-notification is-primary">
                    <a
                      href="https://www.linkedin.com/in/tomvo16/"
                      id="linkedin-icon"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                  </p>
                </div>
                <div class="column is-narrow">
                  <p class="bd-notification is-primary">
                    <a
                      href="https://github.com/tvo25"
                      id="github-icon"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section" id="experience">
        <div class="container">
          <h1 class="section-title has-text-centered">— Where I've been —</h1>
          <Experience></Experience>
        </div>
      </section>
      <section class="section" id="skills">
        <div class="container has-text-centered">
          <h1 class="section-title">— Things I've Learned —</h1>
          {/* <skills></skills> */}
        </div>
      </section>
      <section class="section" id="portfolio">
        <div class="container has-text-centered">
          <h1 class="section-title">— Some of my work —</h1>
          {/* <portfolio></portfolio> */}
        </div>
      </section>
      <section class="section" id="about">
        <div class="container">
          <h1 class="section-title has-text-centered">— A little about me —</h1>
          {/* <about></about> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
