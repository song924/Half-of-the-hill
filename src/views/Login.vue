<template>
  <div id="login">
    <Card style="width:350px" v-if="ddd">
      <p slot="title" style="font-size:20px">登录</p>
      <a href="#" slot="extra" @click="ddd = false">
        <Icon type="more"></Icon>注册
      </a>
      <div id="loginBox">
        <p>
          <Icon type="md-contact" size="25" />
          <Input v-model="loginUser" placeholder="请输入账号" />
        </p>
        <p>
          <Icon type="md-lock" size="25" />
          <Input v-model="loginPwd" type="password" placeholder="请输入密码"/>
        </p>
        <i-button type="primary" :loading="loading" @click="login()" style="margin:0 auto;">
          <span v-if="!loading">登录</span>
          <span v-else>Loading...</span>
        </i-button>
      </div>
    </Card>
    <Card style="width:350px" v-else>
      <p slot="title" style="font-size:20px">注册</p>
      <a href="#" slot="extra" @click="zcShow()">
        <Icon type="md-close" />
      </a>
      <div id="loginBox">
        <p>
          <Icon type="md-person" size="25" />
          <Input v-model="regNick" placeholder="请输入用户名"/>
        </p>
        <p>
          <Icon type="md-contact" size="25" />
          <Input v-model="regUser" @on-blur="selectUser()" placeholder="请输入账号"/>
        </p>
        <p>
          <Icon type="md-lock" size="25" />
          <Input v-model="regPwd" type="password" placeholder="请输入密码"/>
        </p>
        <p>
          <Icon type="md-lock" size="25" />
          <Input v-model="regPwds" type="password" placeholder="请确认密码"/>
        </p>
        <i-button type="primary" style="margin-right:20px" @click="zcShow()">
          <span>取消</span>
        </i-button>
        <i-button type="primary" :loading="loading1" @click="register()" style="margin:0 auto;">
          <span v-if="!loading1">注册</span>
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
      loginUser: "",
      loginPwd: "",
      regNick: "",
      regUser: "",
      regPwd: "",
      regPwds:"",
      userFlag:false,
      ddd: true,
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {
    zcShow() {
      this.regNick = ""
      this.regUser = ""
      this.regPwd = ""
      this.regPwds = ""
      this.ddd = true;
    },
    //发送登录请求
    login() {
      this.loading = true;
      this.axios({
        method: "post",
        url: "login",
        data: {
          user: this.loginUser,
          pwd: this.loginPwd
        }
      })
        .then(res => {
          console.log(res.data);
          if (res.data.result == "0") {
            this.$Message["error"]({
              background: true,
              content: res.data.message,
              duration: 3
            });
            this.loading = false;
            
          } else {
            this.$Message["info"]({
              background: true,
              content: res.data.message,
              duration: 2
            });
            this.loading = false;
            // this.$store.state.userInfo = res.data.info[0]
            var userInfo = {
              name: res.data.info[0].nickname,
              account: res.data.info[0].user_name,
              iconUrl: res.data.info[0].user_img,
            }
            sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
            console.log(this.$store.state.userInfo)
            this.$router.replace({ path: "/index", query: {} });
          }
        })
        .catch(e => {
          this.$Message["error"]({
              background: true,
              content: "服务器请求错误",
              duration: 3
            });
            this.loading = false;
        });
    },
    //发送注册请求
    register() {
      if(this.userFlag){
        this.selectUser()
      }else{
        if(this.regUser && this.regPwd){
        if(this.regPwd == this.regPwds){
        this.loading1 = true;
        this.axios({
        method: "post",
        url: "login/register",
        data: {
          nickname: this.regNick,
          user: this.regUser,
          pwd: this.regPwd
        }
        })
        .then(res => {
          console.log(res.data);
          if (res.data.result == "1") {
            this.$Message["info"]({
              background: true,
              content: res.data.message,
              duration: 2
            });
            this.loading1 = false;
            this.zcShow()
          } else {
            alert(res.data);
          }
        })
        .catch(e => {
          console.log(e)
          this.$Message["error"]({
              background: true,
              content: "服务器请求错误",
              duration: 3 
            });
            this.loading = false;
      });
      }else{
          this.$Message["error"]({
              background: true,
              content: "两次输入的密码不一致",
              duration: 3
            });
            this.loading = false;
      }
      }else{
        this.$Message["error"]({
              background: true,
              content: "请输入正确的账号密码",
              duration: 3
            });
      }
      
      
      }
      
    },
    //注册账号查询
    selectUser(){
      if(this.regUser){
        this.axios({
        method:"get",
        url:"login/select",
        params: {
        user: this.regUser
      }
      })
      .then(res => {
        if(res.data.result == "0"){
          console.log(res.data)
          this.userFlag = true
          this.$Message["error"]({
              background: true,
              content: "账号已存在",
              duration: 2
            });
        }else{
          console.log(res.data)
          this.userFlag = false
        }
      })
      .catch(e => {
        console.log(e)
      })
      }
      
    },
    //正则判断
    /* tests(val){
      console.log(val)
      var pre = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
      if(pre.test(val)){
        console.log("1")
      }else{
        console.log("2")        
      }
    } */
  },

  watch: {}
};
</script>
<style lang='less' scoped>
#login{
  width: 100%;
  height: 100%;
  background: url(../assets/imgs/preview.jpg) no-repeat center;
  background-size: 100% 100%;
  display: flex;
  .ivu-card{
    margin: auto;
    opacity: .8;
  }
}
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