<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,index) in resArr" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      resArr: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios.get("getList").then(res => {
        console.log(res);
      });
      this.$axios.get("http://127.0.0.1:7001").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  width: 20vw;
  padding: 0;
  margin: 10px auto;
  list-style: none;
  line-height: 2;
}
</style>
