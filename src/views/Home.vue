<template>
  <div id="index" style>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1" :to="'/index'">
        <Icon type="ios-paper" />首页
      </MenuItem>
      <MenuItem name="2" :to="'/chat'">
        <Icon type="ios-people" />聊天室
      </MenuItem>
      <MenuItem name="3" :to="'/wuziqi'">双人运动</MenuItem>
     <!--  <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />多人运动
        </template>
        <MenuGroup title="基础运动">
          <MenuItem name="3-1" :to="'wuziqi'">双人运动</MenuItem>
          <MenuItem name="3-2">四人运动</MenuItem>
          <MenuItem name="3-3">五人运动</MenuItem>
        </MenuGroup>
        <MenuGroup title="升级运动">
          <MenuItem name="3-4">百人运动</MenuItem>
          <MenuItem name="3-5">万人运动</MenuItem>
        </MenuGroup>
      </Submenu> -->
      <MenuItem name="4">
        <Icon type="ios-construct" />运动设置
      </MenuItem>
      <MenuItem class="userImg" name="5" :to="'/user_setting'">
        <img  :src="userinfo.iconUrl" alt="" srcset="">
      </MenuItem>
    </Menu>
    <router-view class="content"/>
    <!-- <div style="line-height:60px;text-align:center;">
      <p>最适合大侠的线路是：{{jyxl}}</p>
      <p>最适合大侠的地皮是：{{jydp}}</p>
     <Button type="info" @click="rua">开始</Button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      theme1: "dark",
      userinfo:sessionStorage.userInfo?JSON.parse(sessionStorage.userInfo):"",
      jyxl:0,
      jydp:0,
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {
    goUser(url){
      console.log("嘟嘟嘟")
      this.$router.push({ path: url, query: {} });
    },
    rua(){
      var ddd = setInterval(()=>{
        this.jyxl = parseInt(Math.random()*400)+1
      },60)
      var bbb = setInterval(()=>{
        this.jydp = parseInt(Math.random()*33)+1
      },60)
      setTimeout(()=>{
        clearInterval(ddd)
        clearInterval(bbb)
      },3000)
    }
  },

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
  .content{
    padding: 10px;
    height: calc(100% - 60px)
  }
}
</style>