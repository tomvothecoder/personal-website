<template>
  <!-- Hero -->
  <section class="section" id="the-hero">
    <div class="hero is-large is-center">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 id="hero-welcome">Hi, I'm</h1>
          <h1 id="hero-title">Tom Vo</h1>
          <h2 id="hero-description">
            I'm a Software Engineer in Climate Science.
            <span class="blinking-cursor">|</span>
          </h2>
        </div>
        <div class="container has-text-centered">
          <div class="columns is-mobile is-multiline is-centered">
            <div class="column is-narrow">
              <p class="bd-notification is-primary">
                <a
                  href="https://www.linkedin.com/in/votom/"
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
                  href="https://github.com/tomvothecoder"
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
</template>

<script>
export default {
  name: 'TheHero',
  components: {}
};
</script>

<style>
#hero-welcome {
  color: #363636;
  font-size: 24px;
  line-height: 1.125;
}

#hero-title {
  color: #363636;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.125;
}

#hero-description {
  color: #4a4a4a;
  font-size: 24px;
  margin: 25px;
}

.blinking-cursor {
  font-weight: 100;
  font-size: 24px;
  color: #2e3d48;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}
</style>
