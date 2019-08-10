<template>
  <transition name="fade" mode="out-in">
    <div class="blog">
      <div class="container">
        <div class="column is-full has-text-centered">
          <div class="columns is-centered">
            <figure class="image is-128x128">
              <img class="is-rounded" src="../assets/me.jpg" alt="me" id="me" />
            </figure>
          </div>
          <h1 class="blog-title">Tom's Time Capsule</h1>
          <p class="blog-description">Software Engineer | Web Developer</p>
        </div>
        <div class="columns is-centered is-multiline">
          <div class="column is-full" v-for="post in posts" :key="post.id">
            <div class="columns is-centered">
              <div class="column is-three-quarters">
                <BlogPostCard :post="post" @click.native="alertClicked(post.title)"></BlogPostCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
    },
    alertClicked: function(post) {
      alert(`clicked ${post}`);
    }
  }
};
</script>

<style scoped>
.blog-title {
  font-weight: bold;
  font-size: 3rem;
}

#home-link {
  border-bottom: 1px solid #dadada;
  color: #9a9a9a;
  font-family: Lato, sans-serif;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
}
</style>
