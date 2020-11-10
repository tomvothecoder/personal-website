<template>
  <div id="experience">
    <div class="columns is-centered" data-aos="fade-up" data-aos-delay="75">
      <div class="column is-three-quarters">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column is-one-quarter">
                <figure class="image is-3by3">
                  <img src="../assets/logos/energeia.png" alt="Energeia USA" />
                </figure>
              </div>
              <div class="column is-three-quarters">
                <a
                  href="http://energeia-usa.com/"
                  class="company"
                  target="_blank"
                  >Energeia USA</a
                >
                <p class="job-title">
                  Software Developer,
                  <span class="is-italic">2018 - Present</span>
                </p>
                <p class="job-location has-text-weight-bold">Davis, CA</p>
                <p class="job-desc">
                  At Energeia, I am transitioning the world's most advanced
                  Python based energy simulation application onto a SaaS
                  platform using combination of Django, MySQL, Celery, Plotly,
                  and jQuery. I also perform deep analysis on data sets to
                  develop dashboards to aid the consulting side of the company.
                  My teammate and I have lead engineering efforts to revamp
                  company software practices, including standardized version
                  control and code style. It's awesome being apart a face-paced
                  start-up environment performing cutting-edge research for the
                  energy industry.
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
                  <img src="../assets/logos/intel.svg" alt="Intel" />
                </figure>
              </div>
              <div class="column is-three-quarters">
                <a href="https://intel.com" class="company" target="_blank"
                  >Intel Corporation</a
                >
                <p class="job-title">
                  Technical Marketing Engineer Intern,
                  <span class="is-italic">2017 - 2018</span>
                </p>
                <p class="job-location has-text-weight-bold">Folsom, CA</p>
                <p class="job-desc">
                  Intel was an awesome experience and stepping-stone into the
                  tech industry. I aided internal research on market segments by
                  implenting Python scripts to automate the flow of data
                  collection. My research lead to key decisions in product
                  roadmap planning for Embedded SSDs. In the process, I learned
                  foundational skills such managing projects and understanding
                  the role of stakeholders in within those projects.
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
                  <img src="../assets/logos/uop_tower.jpg" alt="UOP" />
                </figure>
              </div>
              <div class="column is-three-quarters">
                <a href="https://pacific.edu" class="company" target="_blank"
                  >University of the Pacific</a
                >
                <p class="job-title">
                  B.S. in Computer Science,
                  <span class="is-italic">earned May 2018</span>
                </p>
                <p class="job-location has-text-weight-bold">Stockton, CA</p>
                <p></p>
                <p class="job-desc">
                  UOP's awesome engineering and computer science program built
                  the foundation of how to be a professional engineer. They push
                  their students to seek real world experience through co-ops,
                  which are extended internships that are baked into the
                  undergrad degree program. I was deeply engaged in community
                  service through Alpha Phi Omega, an international service
                  organization. My experience at UOP helped shape critical life
                  skills, including empathy, understanding, communication, and
                  leadership. I will forever cherish UOP as my alum mater.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: {}
};
</script>

<style scoped>
.job-desc {
  padding-top: 1.5%;
  font-size: 0.95rem;
  font-weight: 400;
}
</style>
