<template>
  <div id="app">
    <img src="@/assets/bg.jpg" alt />
    <input type="text" v-model="val" @keyup.enter="sendOne" placeholder="I am going to do" />
    <List ref="list" @editThisOne="edit" />
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
      val: "",
      editId: "",
      isEdit: false
    };
  },
  methods: {
    sendOne() {
      // 如果是编辑项目
      if (this.isEdit) {
        this.$axios.post(`edit/${this.editId}`, { val: this.val }).then(res => {
          this.val = "";
          this.$refs.list.getList();
        });
      } else {
        this.$axios.post("add", { val: this.val }).then(res => {
          this.val = "";
          this.$refs.list.getList();
        });
      }
      // 无论是编辑还是新建，都重置成新建
      this.isEdit = false;
    },
    // 拿到要编辑的对象
    edit(one) {
      this.val = one.name;
      this.editId = one.id;
      this.isEdit = true;
    }
  }
};
</script>

<style scoped lang="less">
.paper {
  min-height: 92vh;
}
#app {
  margin-top: 20px;
  img {
    width: 250px;
    display: block;
    margin: 0 auto 10px;
    border: none;
  }
  input {
    width: 84vw;
    margin: 0 auto;
  }
}
</style>
