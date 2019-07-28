<template>
  <div id="app">
    <section class="container" id="nav">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <nav class="level">
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
            <div class="level-item has-text-centered">
              <div>
                  <router-link to="/blog" class="nav-link">
                  <span class="nav-heading">blog</span></router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css?family=Raleway:300&display=swap");

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

p {
  font-family: "Lato", sans-serif;
}

#

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
  margin-top: 50px;
}

.nav-link {
  color: black;
}

.nav-link:hover {
  color: #0077B5;
}
.nav-heading {
  display: block;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

</style>

