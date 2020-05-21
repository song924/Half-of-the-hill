<template>
  <div id="user_setting">
    <Row>

      <Col span="5">
        <Menu :theme="theme3" active-name="1">
          <MenuGroup title="基础设置">
            <MenuItem name="1">
              <Icon type="md-document" />账号信息
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-chatbubbles" />评论管理
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="高级设置">
            <MenuItem name="3">
              <Icon type="md-heart" />账号安全
            </MenuItem>
            <MenuItem name="4">
              <Icon type="md-leaf" />权限设置
            </MenuItem>
          </MenuGroup>
        </Menu>
      </Col>

      <Col span="19" class="rightBox">
        <div class="imgBox">
          <Card :style="[{'background':`url(${serverUrl})`,'background-size':`${imgSize}`}]"></Card>
          <input @change="getImgInfo" type="file" />

          <!-- <Button @click="upUserDate" style="">更换头像</Button> -->
        </div>
      </Col>

    </Row>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      theme3: "dark",
      serverUrl:"",
      imgSize:""
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {
    upUserDate(formdata) {
        this.axios({
            method:"post",
            url:"users",
            data:formdata
        })  
        .then(res =>{
            console.log(res)
            this.serverUrl = res.data.url
            this.imgSize = "100%"
        })
        .catch(e =>{
            console.log(e)
        })
    },
    getImgInfo(e) {
      console.log(e.target.files);
      var imgSize = 2000000;
      var zzz = /\.(jpg|png|jpeg|bmp)/i;
      var str = e.target.files[0].name;
      var sizes = e.target.files[0].size;
      var last = str.lastIndexOf(".");
      var jq = str.substring(last, last.length).toLowerCase();
      if (zzz.test(jq) && sizes <= imgSize) {
        var url = "/picture";
        var imgFiles = e.target.files[0];
        var formdata = new FormData();
        formdata.append("imges", imgFiles);
        formdata.append("user", "111");
        this.upUserDate(formdata)
        console.log(str,sizes,jq,formdata.append)

      } else {
        alert("请选择一张正确的图片并且大小不能大于2M");
      }
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
#user_setting {
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  padding: 20px;
  .ivu-menu,
  .ivu-row,
  .ivu-col {
    height: 100%;
  }
  .rightBox {
    padding: 10px;
    background-color: #fff;
    .ivu-card {
      width: 140px;
      height: 140px;
      background-size:100%;
      margin: 0 auto;
    }
    .imgBox {
      text-align: center;
      .ivu-btn {
        width: 80px;
        padding: 0;
        margin-top: 10px;
      }
    }
  }
}
</style>