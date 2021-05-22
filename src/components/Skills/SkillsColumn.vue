<template>
  <div class="column" id="skills-column">
    <h1 class="skills-header">{{ name }}</h1>
    <div class="columns is-centered" v-for="i in rowCount" :key="i">
      <div
        class="column is-one-third-desktop is-one-half-tablet is-one-half-mobile"
        v-for="skill in itemCountInRow(i)"
        :key="skill[0]"
      >
        <skill :name="skill[0]" :source="skill[1]"></skill>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from './Skill.vue';

export default {
  name: 'SkillsColumn',
  props: { name: String, skills: Array },
  data() {
    return {
      itemsPerRow: 2
    };
  },
  components: { Skill },
  computed: {
    rowCount() {
      return Math.ceil(this.skills.length / this.itemsPerRow);
    }
  },
  methods: {
    itemCountInRow(index) {
      return this.skills.slice(
        (index - 1) * this.itemsPerRow,
        index * this.itemsPerRow
      );
    }
  }
};
</script>

<style></style>
