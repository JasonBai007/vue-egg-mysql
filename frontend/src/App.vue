<template>
  <div id="app">
    <input type="text" v-model="val" @keyup.enter="addOne" />
    <List />
  </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  name: "app",
  components: {
    List
  },
  data() {
    return {
      val: ""
    };
  },
  methods: {
    addOne() {
      this.$axios.post("add", { val: this.val }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
