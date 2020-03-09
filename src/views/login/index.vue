<template>
  <div class="login-container">
    <div class="img-contaniner">
      <img src="../../assets/Starry.jpg" alt />
    </div>

    <div class="particles-container">
      <vue-particles
        color="#E8DFE8"
        :particleOpacity="0.8"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="6"
        linesColor="#133b88"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="particles-js"
      />
    </div>
    <div class="login-content">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Icon class="input-icon" type="ios-contact-outline" />
          <Input class="form-input" type="text" v-model="formInline.username" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem prop="password">
          <Icon class="input-icon" type="ios-lock-outline"></Icon>
          <Input
            class="form-input"
            type="password"
            v-model="formInline.password"
            placeholder="请输入密码"
          ></Input>
        </FormItem>
        <FormItem class="form-btn-item">
          <Button
            type="primary"
            :loading="loading"
            class="form-btn"
            ghost
            @click="handleSubmit('formInline')"
          >登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loading: false,
      formInline: {
        username: "",
        password: ""
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.loading = true;
           
          this.$store
            .dispatch("user/login", this.formInline)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } 
      });
    }
  }
};
</script>


<style lang="less" scoped>
.login-container {
  height: 100%;
  width: 100%;

  position: relative;
  .img-contaniner {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;

    img {
      height: 100%;
      left: 0;
      -o-object-fit: cover;
      object-fit: cover;
      top: 0;
      -ms-transform: none;
      -moz-transform: none;
      -webkit-transform: none;
      transform: none;
      width: 100%;
    }
  }
  .login-content {
    padding: 60px 20px 0 20px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    top: 20px;
    -webkit-transition-timing-function: cubic-bezier(0.68, -0.25, 0.265, 0.85);
    -webkit-transition-property: -webkit-transform, opacity, box-shadow, top,
      left;
    transition-property: transform, opacity, box-shadow, top, left;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transform-origin: 161px 100%;
    -ms-transform-origin: 161px 100%;
    transform-origin: 161px 100%;
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    position: absolute;
    width: 300px;
    height: 340px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background: #35394a;
    background: -webkit-gradient(
      linear,
      left bottom,
      right top,
      color-stop(0%, #35394a),
      color-stop(100%, rgb(0, 0, 0))
    );
    background: -webkit-linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
    .input-icon {
      font-size: 20px;
      color: #fdf2f2dc;
    }
    .form-input {
      background-color: transparent;
      width: 200px;
      margin-left: 15px;
    }
    .form-btn-item {
      text-align: center;
      margin-top: 40px;
      .form-btn {
        width: 100px;
        border-radius: 10px;
      }
    }
  }
  .particles-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    .particles-js {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

