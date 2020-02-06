import vue from "vue";
import vuex from "vuex";
import axios from "axios";

vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    posts: []
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          let posts = res.data;
          commit("SET_POSTS", posts);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    }
  }
});
