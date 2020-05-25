<template>
  <div id="chat">
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
      socketList:[]
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {
    this.$socket.emit("connect", 0);
    this.sockets.listener.subscribe('link_to_client', (data) => {
        var that = this
        that.socketList.push(data)
    })
  },

  sockets:{
    connect() {
      console.log("socket 连接中");
    },
    link_to_client(msg) {
      console.log(msg);
    }
  },

  methods: {
    toSocket() {
      console.log(this.toText);
      //创建一个io对象
      //   var socket = io();
      //用户点击发送的时候直接将昵称和信息内容发送过去，如果没有昵称，显示匿名，判断是不是有值
      if (this.toText) {
        this.$socket.emit(
          "link_to_server",
          this.toText,
          this.userinfo.name ? this.userinfo.name : "匿名"
        );
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