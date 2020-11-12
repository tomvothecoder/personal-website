<template>
  <div id="skills">
    <skills-row :skills="languages"></skills-row>
    <div class="columns">
      <skills-column name="Front-end" :skills="frontend"></skills-column>
      <skills-column name="Back-end" :skills="backend"></skills-column>
      <skills-column name="DevOps" :skills="devOps"></skills-column>
      <skills-column name="Tools" :skills="tools"></skills-column>
    </div>
  </div>
</template>

<script>
import SkillsRow from './SkillsRow.vue';
import SkillsColumn from './SkillsColumn.vue';

export default {
  name: 'Skills',
  components: { SkillsRow, SkillsColumn },
  data() {
    return {
      languages: [
        ['Python', 'python.svg'],
        ['JavaScript', 'javascript.svg'],
        ['TypeScript', 'typescript-icon.svg']
      ],
      backend: [
        ['Django', 'django.svg'],
        ['Node.js', 'nodejs-icon.svg'],
        ['Postgres', 'postgresql.svg'],
        ['MySQL', 'mysql.svg']
      ],
      frontend: [
        ['React', 'react.svg'],
        ['Vue', 'vue.svg'],
        ['Ant Design', 'ant-design.svg'],
        ['Bootstrap 4', 'bootstrap.svg'],
        ['HTML', 'html5.svg'],
        ['CSS', 'css3.svg']
      ],
      devOps: [
        ['Docker', 'docker.svg'],
        ['Docker-Compose', 'docker-compose.svg'],
        ['Jest', 'jest.svg'],
        ['React Testing Library', 'rtl.svg'],
        ['Pytest', 'pytest.svg'],
        ['Traefik', 'traefik.svg']
      ],
      tools: [
        ['GitHub', 'github-icon.svg'],
        ['Bitbucket', 'bitbucket.svg'],
        ['Jira', 'jira.svg'],
        ['Confluence', 'confluence.svg'],
        ['AWS', 'aws.svg'],
        ['Heroku', 'heroku.svg']
      ]
    };
  }
};
</script>

<style>
.skills-header {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: inline-block;
  padding-bottom: 5px;
  position: relative;
}
.skills-header:before {
  content: '';
  position: absolute;
  width: 50%;
  height: 1px;
  bottom: 0;
  left: 25%;
  border-bottom: 2px solid red;
}
.logo {
  justify-content: center;
}
</style>
