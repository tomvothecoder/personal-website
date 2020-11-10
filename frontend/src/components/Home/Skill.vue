<template>
  <div id="skill" data-aos="zoom-in">
    <div class="is-flex logo">
      <div class="logo">
        <figure class="image is-64x64">
          <img :src="getImgUrl" :alt="name" />
        </figure>
      </div>
    </div>
    <h1 class="label" :id="name">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: { name: String, source: String },
  computed: {
    getImgUrl() {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(`../../assets/skills/${this.source}`);
    }
  }
};
</script>

<style>
.label {
  font-weight: bold;
  padding-top: 0.5rem;
}

#Django,
#Docker-Compose {
  padding-top: 1rem;
}

#Traefik {
  padding-top: 1.25rem;
}

.logo {
  justify-content: center;
}
</style>
