<template>
  <div class="columns is-centered" id="skills-row">
    <div class="column is-2" v-for="skill in skills" :key="skill[0]">
      <skill :name="skill[0]" :source="skill[1]"></skill>
    </div>
  </div>
</template>

<script>
import Skill from './Skill.vue';

export default {
  name: 'SkillsRow',
  props: { skills: Array },
  components: { Skill }
};
</script>

<style></style>
