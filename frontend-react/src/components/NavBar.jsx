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
                  <NavLink to="/">
                    <span className="nav-heading">Home</span>
                  </NavLink>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
