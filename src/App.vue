<template>
  <div class="post">
    <div v-if="!hasError">
      <div v-for="post in posts" :key="post.id" class="post">
        <h1>{{ post.title }}</h1>
      </div>
    </div>
    <div v-else>No data available.</div>
  </div>
</template>

<script>
import useApi from "./hooks/useApi";

export default {
  name: "App",
  components: {},
  setup() {
    const { pending, hasError, data, request } = useApi({
      url: "https://jsonplaceholder.typicode.com/posts",
      fireOnLoad: true,
      successCallback: (data) => {
        console.log(data);
      },
      failedCallback: () => {
        console.log("Error Occurred");
      },
    });

    request();

    return { posts: data, hasError, pending };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
