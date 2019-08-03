<template>
  <div class="blog">
    <div class="container">
      <div class="column is-full has-text-centered">
        <h1 class="blog-title">Tom's Time Capsule</h1>
        <p class="blog-description">Software Engineer | Web Developer</p>
      </div>
      <BlogPostCard :posts="posts"></BlogPostCard>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import BlogPostCard from "@/components/BlogPostCard.vue";

export default {
  name: "blog",
  components: {
    BlogPostCard
  },
  data() {
    return {
      posts: null
    };
  },
  mounted: function() {
    this.FetchData();
  },
  methods: {
    FetchData: function() {
      axios
        .get("http://localhost:8000/api/v1/blog/posts/")
        .then(response => (this.posts = response.data));
    }
  }
};
</script>

<style scoped>
.blog-title {
  font-weight: bold;
  font-size: 3rem;
}

.blog-description {
  border-bottom: 1px solid #dadada;
  color: #9a9a9a;
  font-family: Lato, sans-serif;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
}
</style>
