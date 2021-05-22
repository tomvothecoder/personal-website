<template>
  <div id="BlogPostCard">
    <router-link
      :to="{ name: 'blog-post', params: { id: post.id, post: post } }"
      class="nav-link"
    >
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="post-date">{{ post.created_on | moment }}</p>
      <p></p>
      {{ post.body }}
    </router-link>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'BlogPostCard',
  props: {
    post: Object
  },
  data() {
    return {
      current: 'BlogPost'
    };
  },
  methods: {
    viewPost() {}
  },
  filters: {
    moment(date) {
      return moment(date).format('MMMM Do, YYYY');
    }
  }
};
</script>

<style scoped>
.post-title {
  font-weight: 700;
  font-size: 1.5rem;
}

.post-date {
  color: #9a9a9a;
}
</style>
