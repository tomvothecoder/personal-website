import React from 'react';
import PropTypes from 'prop-types';

function Card({ imgSrc, href, length, company, jobTitle, location, children }) {
  Card.propTypes = {
    imgSrc: PropTypes.elementType.isRequired,
    href: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="columns">
          <div className="column is-one-quarter">
            <figure className="image is-3by3">
              <img src={imgSrc} alt={company} />
            </figure>
          </div>
          <div className="column is-three-quarters">
            <a
              href={href}
              className="company"
              rel="noopener noreferrer"
              target="_blank"
            >
              {company}
            </a>
            <p className="job-title">
              {jobTitle}, <span className="is-italic">{length}</span>
            </p>
            <p className="job-location has-text-weight-bold">{location}</p>
            <p className="job-desc">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
