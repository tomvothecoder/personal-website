import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bulma/css/bulma.css';

function NavBar() {
  return (
    <div id="Navigation">
      <section className="container" id="nav">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="nav-link">
                    <span className="nav-heading">Experience</span>
                  </a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="nav-link">
                    <span className="nav-heading">Skills</span>
                  </a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="nav-link">
                    <span className="nav-heading">Portfolio</span>
                  </a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="nav-link">
                    <span className="nav-heading">About</span>
                  </a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <NavLink to="/blog" className="nav-link">
                    <span className="nav-heading">Blog</span>
                  </NavLink>
                </div>
              </div>
            </nav>
            {/* <nav className="blog" v-if="['blog'].includes($route.name)">
                <div className="level-item has-text-centered">
                  <div>
                    <NavLink to="/" className="nav-link">
                      <span className="nav-heading">Home</span>
                    </NavLink>
                  </div>
                </div>
              </nav> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
