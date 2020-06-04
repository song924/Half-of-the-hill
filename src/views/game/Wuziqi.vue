<template>
  <div id="wuziqi">
    <canvas id="canvas_0" width="300px" height="600px"></canvas>
    <canvas id="canvas_1" width="300px" height="600px"></canvas>
    <div id="shadowBox"></div>
    <div id="back2">后退</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  created() {},

  mounted() {
    this.canvasInit();
  },

  methods: {
    //初始化画布大小
    canvasInit() {
      var Board = document.getElementById("canvas_0");
      var BoardToGraw = document.getElementById("canvas_1");
      var shadowBox = document.getElementById("shadowBox");
      var back = document.getElementById("back1");
      var back = document.getElementById("back2");
      var windowWidth =
        document.documentElement.clientWidth || document.body.clientWidth; //拿到当前浏览器可视宽度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //拿到当前浏览器可视高度
      Board.style.width = windowWidth * 0.9 + "px"; //棋盘宽度为当前浏览器可视宽度的90%
      Board.style.height = windowWidth * 0.9 + "px"; //棋盘高度为当前浏览器可视宽度的90%
      BoardToGraw.style.width = windowWidth * 0.9 + 40 + "px"; //棋子canvas宽度为当前浏览器可视宽度的90% + 左右各20px
      BoardToGraw.style.height = windowWidth * 0.9 + 40 + "px"; //棋子canvas高度为当前浏览器可视宽度的90% + 上下各20px
      shadowBox.style.width = windowWidth * 0.9 + "px"; //边框宽度为当前浏览器可视宽度的90%
      shadowBox.style.height = windowWidth * 0.9 + "px"; //边框高度为当前浏览器可视宽度的90%
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
#canvas_0 {
  box-sizing: border-box;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: #ffd75b;
  z-index: 5;
}

#canvas_1 {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

#shadowBox {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 20px solid #ffd75b;
}

#back2 {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  background-color: red;
  color: white;
}
</style>