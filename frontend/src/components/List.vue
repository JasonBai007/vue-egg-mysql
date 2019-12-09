<template>
  <ol>
    <li v-for="(item,index) in itemArr" :key="index" @dblclick="edit(item)">
      {{item.name}}
      <span @click="del(item.id)" class="text-danger">X</span>
    </li>
  </ol>
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
    },

    async edit(item) {
      this.$emit("editThisOne", item);
    },

    async del(id) {
      await this.$axios.delete(`delete/${id}`);
      this.getList();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ol {
  padding-left: 8vw;
  line-height: 2;
  margin-right: 8vw;
  li {
    text-align: left;
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
    span {
      float: right;
      padding-right: 2px;
      &:hover {
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
