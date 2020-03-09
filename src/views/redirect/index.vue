<script>
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
    console.log("tytyty")
  },
  render: function(h) {
    return h() //防止报错
  }
}
</script>
