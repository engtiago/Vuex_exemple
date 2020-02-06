<template>
  <div id="app">
    <p v-for="(item, index) in posts" :key="index">{{item.title}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("loadPosts");
  },
  computed: {
    ...mapState(["posts"])
  }
};
</script>
