<template>
  <div id="BlogPostCard">
    <div class="columns is-centered is-multiline">
      <div class="column is-full" v-for="post in posts" :key="post.id" @click:>
        <div class="columns is-centered">
          <div class="column is-three-quarters">
            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-date">{{ post.created_on | moment}}</p>

            <p></p>
            {{ post.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "BlogPostCard",
  props: {posts: Object,
        componentsArray: ['foo']


          },
  methods: {
    viewPost: function() {}
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do, YYYY");
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
