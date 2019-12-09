<template>
  <div class="hello">
    <ol>
      <li v-for="(item,index) in itemArr" :key="index" @dblclick="edit(item)">
        {{item.name}}
        <span @click="del(item.id)">X</span>
      </li>
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
  margin: 10px 0;
  line-height: 2;
  li {
    text-align: left;
    width: calc(100vw - 75px);
    &:hover {
      background: #e0eafc; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #cfdef3,
        #e0eafc
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #cfdef3,
        #e0eafc
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    span {
      float: right;
      padding-right: 2px;
      &:hover {
        color: red;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
