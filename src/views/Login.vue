<template>
  <div style="display:flex;margin:auto;">
    <Card style="width:350px" v-if="ddd">
      <p slot="title" style="font-size:20px">登录</p>
      <a href="#" slot="extra" @click="ddd = false">
        <Icon type="more"></Icon>注册
      </a>
      <div id="loginBox">
        <p>
          <Icon type="md-contact" size="25"/>
          <i-input placeholder="请输入账号"></i-input>
        </p>
        <p>
          <Icon type="md-lock" size="25" />
          <i-input placeholder="请输入密码"></i-input>
        </p>
        <i-button type="primary" :loading="loading" @click="" style="margin:0 auto;">
          <span v-if="!loading">登录</span>
          <span v-else>Loading...</span>
        </i-button>
      </div>
    </Card>
    <Card style="width:350px" v-else>
      <p slot="title" style="font-size:20px">注册</p>
      <a href="#" slot="extra" @click="ddd = true">
        <Icon type="md-close" />
      </a>
      <div id="loginBox">
          <p>
          <Icon type="md-person" size="25"/>
          <i-input placeholder="请输入用户名"></i-input>
        </p>
        <p>
          <Icon type="md-contact" size="25"/>
          <i-input placeholder="请输入账号"></i-input>
        </p>
        <p>
          <Icon type="md-lock" size="25" />
          <i-input placeholder="请输入密码"></i-input>
        </p>
        <i-button type="primary" style="margin-right:20px" @click="ddd = true">
            <span>取消</span>
        </i-button>
        <i-button type="primary" :loading="loading" @click="toLoading" style="margin:0 auto;">
          <span v-if="!loading">注册</span>
          <span v-else>Loading...</span>
        </i-button>
      </div>
    </Card>
    
  </div>
    
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      loading: false,
      loading1: false,
      modal10: false,
      value1:0,
      ddd:true
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {
      zcShow(){
          this.ddd = false
      }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
#loginBox {
  text-align: center;
  p {
    display: flex;
    .ivu-icon {
      margin: auto 10px;
      margin-left: 0;
    }
    margin: 20px 30px;
  }
}
</style>