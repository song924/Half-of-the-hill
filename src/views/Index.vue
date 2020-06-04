<template>
  <div></div>
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

  created() {
      this.getUserInfo()
  },

  mounted() {},

  methods: {
    getUserInfo() {
      this.axios({
        method: "get",
        url: "index",
        params: {user:"111"}
      })
      .then(res=>{
          console.log(res.data)
          if(res.data.status == "403"){
              this.$store.commit("del_token")
              window.location.reload()
          }else{

          }
      })
      .catch(e=>{
          console.log(e)
      })
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
</style>