<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in itemArr" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      itemArr: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios.get("getList").then(res => {
        this.itemArr = res.data;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul {
  width: 20vw;
  padding: 0;
  margin: 10px auto;
  list-style: none;
  line-height: 2;
}
</style>
