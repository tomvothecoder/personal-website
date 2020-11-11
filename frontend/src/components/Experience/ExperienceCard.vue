<template>
  <div class="card" id="experience-card">
    <div class="card-content">
      <div class="columns">
        <div class="column is-one-quarter" id="logo-column">
          <figure class="image is-3by3">
            <img :src="getImgUrl" :alt="company" />
          </figure>
        </div>
        <div class="column is-three-quarters">
          <p>
            <a :href="link" class="company" target="_blank">{{ company }}</a>
            <span class="length">{{ length }}</span>
          </p>

          <p class="job-title">{{ title }}</p>
          <p class="job-location has-text-weight-bold">{{ location }}</p>
          <p class="job-desc">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    imgSrc: String,
    company: String,
    title: String,
    length: String,
    location: String,
    link: String,
    description: String
  },
  computed: {
    getImgUrl() {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(`../../assets/logos/${this.imgSrc}`);
    }
  }
};
</script>

<style>
#logo-column {
  justify-content: center;
  text-align: center;
}
.job-desc {
  padding-top: 1.5%;
  font-size: 16px;
  font-weight: 400;
}
.company {
  font-weight: 500;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
}
.length {
  float: right;
  font-size: 16px;
  font-style: italic;
}
.job-title {
  font-weight: 600;
}
</style>
