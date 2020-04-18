import React from 'react';

import energeiaLogo from '../../assets/energeia.png';
import uopTower from '../../assets/uop_tower.jpg';

function Experience() {
  return (
    <div id="experience">
      <div class="columns is-centered" data-aos="fade-up" data-aos-delay="75">
        <div class="column is-three-quarters">
          <div class="card">
            <div class="card-content">
              <div class="columns">
                <div class="column is-one-quarter">
                  <figure class="image is-3by3">
                    <img src={energeiaLogo} alt="Energeia USA" />
                  </figure>
                </div>
                <div class="column is-three-quarters">
                  <a
                    href="http://energeia-usa.com/"
                    class="company"
                    target="_blank"
                  >
                    Energeia USA
                  </a>
                  <p class="job-title">
                    Software Developer,
                    <span class="is-italic">2018 - Present</span>
                  </p>
                  <p class="job-location has-text-weight-bold">Davis, CA</p>
                  <p class="job-desc">
                    At Energeia, I was the lead software engineer in charge of
                    transitioning uSim,the world's most advanced Python energy
                    simulation software, onto a SaaS platform. I also performed
                    data analytics on modeling data sets to develop dashboards,
                    which aided the work of the consulting team. It was an
                    awesome being apart a face-paced start-up environment
                    performing cutting-edge research for the energy industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-centered" data-aos="fade-up" data-aos-delay="75">
        <div class="column is-three-quarters">
          <div class="card">
            <div class="card-content">
              <div class="columns">
                <div class="column is-one-quarter">
                  <figure class="image is-3by2" id="intel-logo">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/1200px-Intel-logo.svg.png"
                      alt="Intel"
                    />
                  </figure>
                </div>
                <div class="column is-three-quarters">
                  <a href="https://intel.com" class="company" target="_blank">
                    Intel Corporation
                  </a>
                  <p class="job-title">
                    Technical Marketing Engineer Intern,
                    <span class="is-italic">2017 - 2018</span>
                  </p>
                  <p class="job-location has-text-weight-bold">Folsom, CA</p>
                  <p class="job-desc">
                    Interning at Intel was an amazing experience where I flexed
                    my engineering muscles within the business world. I aided
                    internal research on market segments by implenting Python
                    scripts to automate the flow of data collection. My research
                    lead to key decisions in product roadmap planning for
                    Embedded SSDs. In the process, I learned foundational skills
                    such managing projects and understanding the role of
                    stakeholders in within those projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-centered" data-aos="fade-up" data-aos-delay="75">
        <div class="column is-three-quarters">
          <div class="card">
            <div class="card-content">
              <div class="columns">
                <div class="column is-one-quarter">
                  <figure class="image is-3by3">
                    <img src={uopTower} alt="Energeia USA" />
                  </figure>
                </div>
                <div class="column is-three-quarters">
                  <a href="https://pacific.edu" class="company" target="_blank">
                    University of the Pacific
                  </a>
                  <p class="job-title">
                    B.S. in Computer Science,
                    <span class="is-italic">earned May 2018</span>
                  </p>
                  <p class="job-location has-text-weight-bold">Stockton, CA</p>
                  <p></p>
                  <p class="job-desc">
                    UOP's awesome engineering and computer science program built
                    the foundation of how to be a professional engineer. They
                    push their students to seek real world experience through
                    co-ops, which are extended internships that are baked into
                    the undergrad degree program. I was deeply engaged in
                    community service through Alpha Phi Omega, an international
                    service organization. My experience at UOP helped shape
                    critical life skills, including empathy, understanding,
                    communication, and leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
