<template>
  <div id="the-navigation">
    <section class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <!-- Home page navigation bar -->
          <nav class="level" v-if="['career'].includes($route.name)">
            <div class="level-item has-text-centered">
              <div>
                <a href="#" v-scroll-to="'#experience'" class="nav-link">
                  <span class="nav-heading">Experience</span>
                </a>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <a href="#" v-scroll-to="'#skills'" class="nav-link">
                  <span class="nav-heading">Skills</span>
                </a>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <a href="#" v-scroll-to="'#portfolio'" class="nav-link">
                  <span class="nav-heading">Portfolio</span>
                </a>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <a href="#" v-scroll-to="'#about'" class="nav-link">
                  <span class="nav-heading">About</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TheNavigation'
};
</script>

<style scoped>
#the-navigation {
  margin-top: 50px;
}

.nav-link {
  color: black;
}

.nav-link:hover {
  color: #0077b5;
}
.nav-heading {
  display: block;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
}
</style>
