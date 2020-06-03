<template>
  <div id="chat">
    <p style="position: absolute;left:230px;z-index:10;">当前在线人数：{{online_people}}</p>
    <div class="chatBox">
        <ul>
            <li v-for="(item,i) in socketList">{{item}}</li>
        </ul>
    </div>
    <div class="userBox">
      <p>用户：{{userinfo.name}}</p>
      <textarea v-model="toText"></textarea>
      <Button type="info" @click="toSocket">发送</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      userinfo: JSON.parse(sessionStorage.userInfo),
      toText: "",
      socketList:[],
      online_people:0
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {
    // 创建连接
    this.$socket.emit("connect", 0);
    //监听广播回来的消息
    this.sockets.listener.subscribe('link_to_client', (data) => {
        var that = this
        that.socketList.push(data)
    })
    
    /* //发送在线人数+1
    if(sessionStorage.online_people){
      this.$socket.emit("online_people_add",sessionStorage.online_people)
    }else{
      var people = 1
      this.$socket.emit("online_people_add",people);
      sessionStorage.setItem("online_people",people)
    } */
    
    //监听返回的在线人数
    /* this.sockets.listener.subscribe('online_people', (data) => {
      console.log(data)
        var that = this
        that.online_people = data
    }) */
  },

  sockets:{
    
  },

  methods: {
    toSocket() {
      console.log(this.toText);
      //用户点击发送的时候直接将昵称和信息内容发送过去，如果没有昵称，显示匿名，判断是不是有值
      if (this.toText) {
        this.$socket.emit(
          "link_to_server",
          this.toText,
          this.userinfo.name ? this.userinfo.name : "匿名"
        );
      this.toText = ""

      } else {
        alert(`发送内容不可以为空`);
      }
    }
  }
};
</script>
<style lang='less' scoped>
.chatBox {
  width: 40%;
  height: 80%;
  border: 1px solid #ccc;
  margin: 0 auto;
  overflow-y: scroll;
  padding: 10px;
  position: relative;
  
}
::-webkit-scrollbar {
  width: 5px;
}
.userBox {
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>