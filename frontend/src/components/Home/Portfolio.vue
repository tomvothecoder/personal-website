<template>
  <div id="portfolio">
    <div class="portfolio">
      <div class="columns">
        <div class="column is-half">
          <a href="https://github.com/tvo25/myliftingpal" target="_blank">
            <figure data-aos="fade" class="image project-img">
              <img class="proj-img" src="../../assets/personal/proj1.png" />
              <div class="overlay">
                <h1 class="text">
                  MyLiftingPal
                  <br />A web app designed for fitness enthusiasts
                </h1>
              </div>
            </figure>
          </a>
        </div>
        <div class="column is-half">
          <a href="https://github.com/tvo25/the-grove" target="_blank">
            <figure
              data-aos="fade"
              data-aos-delay="100"
              class="image project-img"
            >
              <img src="../../assets/personal/proj2_edit.png" />
              <div class="overlay">
                <h1 class="text">
                  The Grove
                  <br />A web app for UOP's on-campus convenience store
                </h1>
              </div>
            </figure>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {},
};
</script>

<style scoped>
.proj-img {
  border-width: 100px;
  border-color: black;
}
.project-img:hover .overlay {
  opacity: 0.85;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #659dbd;
}
.text {
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
