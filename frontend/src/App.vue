<template>
  <div id="app">
    <input type="text" v-model="val" @keyup.enter="addOne" />
    <List ref="list" />
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
        this.val = "";
        this.$refs.list.getList();
      });
    }
  }
};
</script>

<style scoped lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  input {
    margin-left: 23px;
    width: 15vw;
  }
}
</style>
