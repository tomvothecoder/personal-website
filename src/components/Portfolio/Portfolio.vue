<template>
  <div id="portfolio">
    <div class="portfolio">
      <div class="columns">
        <template v-for="project in projects">
          <div class="column is-half" :key="project.name">
            <portfolio-card
              :name="project.name"
              :description="project.description"
              :link="project.link"
              :imageSrc="project.imageSrc"
            ></portfolio-card>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCard from './PortFolioCard.vue';

export default {
  name: 'Portfolio',
  props: {},
  components: { PortfolioCard },
  data() {
    return {
      projects: [
        {
          name: 'MetaGrid',
          description:
            'The next-gen Earth System Grid Federation search portal',
          link: 'https://github.com/aims-group/metagrid',
          imageSrc: 'metagrid.png'
        },
        {
          name: 'MyLiftingPal',
          description: 'A web app designed for fitness enthusiasts',
          link: 'https://github.com/tomvothecoder/myliftingpal',
          imageSrc: 'myliftingpal.png'
        }
      ]
    };
  }
};
</script>

<style scoped></style>
