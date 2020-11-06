<template>
  <div id="about">
    <div class="columns is-centered" data-aos="fade-up" data-aos-delay="75">
      <div class="column is-three-quarters">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column is-one-quarter">
                <figure class="image">
                  <img src="../../assets/personal/me.jpg" alt="me" id="me" />
                </figure>
              </div>
              <div class="column is-three-quarters">
                <p class="job-desc">
                  As a software engineer, I really enjoy the thought process
                  involved in planning and executing new imaginative ideas.
                  Aside from programming, my passions lie in fitness, hiking,
                  photography, and eating the best burrito that a town has to
                  offer. Catch me around the California central valley and bay
                  area!
                </p>

                <div class="container has-text-centered">
                  <h1 id="lets-connect">
                    Let's get in touch. LinkedIn or email works best.
                  </h1>
                  <h1 class="has-text-weight-bold	">Email: votom96@gmail.com</h1>
                  <div class="columns is-mobile is-multiline is-centered">
                    <div class="column is-narrow">
                      <p class="bd-notification is-primary">
                        <a
                          href="https://www.linkedin.com/in/tomvo16/"
                          id="linkedin-icon"
                          target="_blank"
                        >
                          <i class="fab fa-linkedin fa-5x"></i>
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
                          <i class="fab fa-github fa-5x"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
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
  name: 'About',
  props: {}
};
</script>

<style scoped>
#lets-connect {
  margin-top: 4%;
  font-weight: 600;
}
</style>
