<template>
  <div id="BlogPost">
    {{ post }}
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: { post: Object }
};
</script>

<style scoped></style>
