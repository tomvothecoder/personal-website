<template>
    <div class="blog">
        <h1>This is the blog page</h1>
        {{posts}}
    </div>
</template>


<script>
    import axios from 'axios';

    export default {
        name: "blog",
        data() {
            return {
                posts: null
            }
        },
        mounted: function () {
            this.FetchData()
        },
        methods: {
            FetchData: function () {
                var app = this;
                axios
                    .get('http://localhost:8000/api/v1/blog/posts/')
                    .then(response => (app.posts = response.data))
            }
        }
    };

</script>
