<template>
  <div id="index" style>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-paper" />时间管理
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />女友管理
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />多人运动
        </template>
        <MenuGroup title="基础运动">
          <MenuItem name="3-1">双人运动</MenuItem>
          <MenuItem name="3-2">四人运动</MenuItem>
          <MenuItem name="3-3">五人运动</MenuItem>
        </MenuGroup>
        <MenuGroup title="升级运动">
          <MenuItem name="3-4">百人运动</MenuItem>
          <MenuItem name="3-5">万人运动</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="4">
        <Icon type="ios-construct" />运动设置
      </MenuItem>
      <MenuItem class="userImg" name="5">
        <img src="../assets/imgs/preview.jpg" alt="" srcset="">
      </MenuItem>
    </Menu>
    
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      theme1: "dark"
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less' scoped>
#index {
  width: 100%;
  height: 100%;
  .ivu-menu {
    display: flex;
    justify-content: flex-end;
  }
  .userImg{
    display: flex;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: auto;
    }
  }
}
</style>