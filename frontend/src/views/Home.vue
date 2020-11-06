<template>
  <div class="home">
    <!-- Hero -->
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
                    <i class="fab fa-linkedin fa-3x"></i>
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
                    <i class="fab fa-github fa-3x"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->
    <!-- Experience -->
    <section class="section" id="experience">
      <div class="container">
        <h1 class="section-title has-text-centered">— Where I've been —</h1>
        <experience></experience>
      </div>
    </section>
    <!--  -->
    <!-- Skills -->
    <section class="section" id="skills">
      <div class="container has-text-centered">
        <h1 class="section-title">— Things I've Learned —</h1>
        <skills></skills>
      </div>
    </section>
    <!-- End Skills -->
    <!-- Portfolio -->
    <section class="section" id="portfolio">
      <div class="container has-text-centered">
        <h1 class="section-title">— Some of my work —</h1>
        <portfolio></portfolio>
      </div>
    </section>
    <!-- End Portfolio  -->

    <!-- About me -->
    <section class="section" id="about">
      <div class="container">
        <h1 class="section-title has-text-centered">— A little about me —</h1>
        <about></about>
      </div>
    </section>
    <!-- End About me -->
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from '../components/Home/Portfolio.vue';
import Experience from '../components/Home/Experience.vue';
import Skills from '../components/Home/Skills.vue';
import About from '../components/Home/About.vue';

export default {
  name: 'home',
  components: {
    Portfolio,
    Experience,
    About,
    Skills
  }
};
</script>

<style>
#hero-welcome {
  color: #363636;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.125;
  font-style: italic;
}

#hero-title {
  color: #363636;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.125;
}

#hero-subtitle {
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 300;
  margin: 25px;
}

#linkedin-icon {
  color: #0077b5;
}

#linkedin-icon:hover {
  color: inherit;
}

#github-icon {
  color: inherit;
}

#github-icon:hover {
  color: #0077b5;
}

#experience,
#portfolio {
  background-color: #f2f2f2;
}

.section-title {
  font-size: 150%;
  font-weight: 500;
  color: black;
  margin-bottom: 3%;
}

.company {
  font-weight: 500;
  font-size: 125%;
}

.job-title {
  font-weight: 600;
  color: #5e9516;
}

.company {
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
}
</style>
