<template>
  <div class="career">
    <the-hero></the-hero>
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
import About from '../components/Career/About.vue';
import Experience from '../components/Career/Experience/Experience.vue';
import Portfolio from '../components/Career/Portfolio/Portfolio.vue';
import Skills from '../components/Career/Skills/Skills.vue';
import TheHero from '../components/Career/TheHero.vue';

export default {
  name: 'home',
  components: {
    TheHero,
    Experience,
    Skills,
    Portfolio,
    About
  }
};
</script>

<style>
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
</style>
