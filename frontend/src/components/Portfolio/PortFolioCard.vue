<template>
  <a :href="link" target="_blank" id="portfolio-card">
    <figure data-aos="fade" data-aos-delay="100" class="image project-img">
      <img :src="getImgUrl" />
      <div class="overlay">
        <h1 class="text">
          {{ name }}
          <br />{{ description }}
        </h1>
      </div>
    </figure>
  </a>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    name: String,
    description: String,
    link: String,
    imageSrc: String
  },
  computed: {
    getImgUrl() {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(`../../assets/portfolio/${this.imageSrc}`);
    }
  }
};
</script>

<style>
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
