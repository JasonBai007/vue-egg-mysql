<template>
  <div class="hello">
    <ol>
      <li v-for="(item,index) in itemArr" :key="index">{{item.name}}</li>
    </ol>
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
    async getList() {
      const res = await this.$axios.get("getList");
      this.itemArr = res.data.data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ol {
  margin: 10px 0;
  line-height: 2;
  li {
    text-align: left;
  }
}
</style>
