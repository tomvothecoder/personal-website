<template>
  <div id="ContactForm">
    <div class="columns is-centered" data-aos="fade-up" data-aos-delay="75">
      <div class="column is-three-quarters">
        <div class="card">
          <div class="card-content">
            <form @submit="formSubmit">
              <strong>Name:</strong>
              <input class="input" type="text" placeholder="First Last" v-model="name" />
              <strong>E-mail:</strong>
              <input class="input" type="text" placeholder v-model="email" />
              <strong>Message:</strong>
              <textarea class="textarea" placeholder="Hi Tom! You're awesome!" v-model="message"></textarea>
              <div class="control">
                <button type="submit" class="button is-primary">Submit</button>
              </div>
              <pre>{{output}}</pre>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      output: ""
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      axios
        .post("http://localhost:8000/api/v1/blog/contact/", {
          name: this.name,
          email: this.email,
          message: this.message
        })
        .then(function(response) {
          currentObj.output = response.data;
        })
        .catch(function(error) {
          currentObj.output = error;
        });
    }
  }
};
</script>

<style scoped>
</style>
