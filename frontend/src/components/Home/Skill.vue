<template>
  <div id="Skill">
    <h1 class="skills-header">Back-End</h1>
    <div class="columns is-centered">
      <div class="column has-text-centered is-one-third">
        <div class="is-flex logo">
          <figure class="image is-64x64 logo">
            <img
              src="../../assets/svgs/colored/django.svg"
              alt="django"
              height="50px"
              width="50px"
            />
          </figure>
        </div>
        <div class="skill">
          <h1>Django</h1>
        </div>
      </div>
      <div class="column is-one-third">
        <figure class="image is-96x64">
          <img
            src="../../assets/svgs/colored/nodejs.svg"
            alt="django"
            height="100px"
            width="125px"
          />
        </figure>
        <div class="skill">
          <h1>Node.js</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {},
};
</script>

<style scoped></style>
