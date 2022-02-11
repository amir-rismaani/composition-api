<template>
  <div class="data">
    <vue-json-pretty :data="{ pending, hasError, data }"> </vue-json-pretty>
    <button @click="request()">Request</button>
  </div>
</template>

<script>
import useApi from "./hooks/useApi";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

export default {
  name: "App",
  components: { VueJsonPretty },
  setup() {
    const { pending, hasError, data, request } = useApi({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      fireOnLoad: false,
      successCallback: (data) => {
        console.log(data);
      },
      failedCallback: () => {
        console.log("Error Occurred");
      },
    });
    return { data, hasError, pending, request };
  },
};
</script>

<style>
.data {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vjs-tree {
  border: 1px solid #eeeeee;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
</style>
