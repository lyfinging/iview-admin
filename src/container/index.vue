<template>
  <div class="layout">
    <Layout class="ivu-layout">
      <Header class="top-header">
        <div class="top-nav">
          <div class="log">log</div>
          <div class="layout-nav">
            <div class="nav-item">
              <screenfull id="screenfull" />
            </div>
            <div class="nav-item">
              <i class="iconfont iconxiaoxi"></i>
            </div>

            <div class="nav-dropdown">
              <Dropdown trigger="click">
                <a class="nav-dropdown-a" href="javascript:void(0)">
                  <span>
                    <i class="iconfont iconrenwu-touxiang"></i>
                  </span>

                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>退出</DropdownItem>
                  <DropdownItem>面板</DropdownItem>
                  <DropdownItem>个人中心</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </Header>
      <Layout class="main">
        <Sider class="sider" collapsible hide-trigger :collapsed-width="45" v-model="isCollapsed">
          <div class="sider-content">
            <Menutree
              :routes="permission_routes"
              @listenisCollapsed="listenisCollapsedfuc"
              :isCollapsed="isCollapsed"
            ></Menutree>
          </div>
        </Sider>
        <Layout class="container">
          <Layout class="breadcrumb">
            <div class="breadcrumb-container">
              <div class="nav-collapsible" @click="collapsedfuc()">
                <i class="iconfont iconiconfont-edu12"></i>
              </div>
            </div>
          </Layout>
          <Layout class="container-content">
            <Content class="content">
              <router-view />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import Menutree from "./components/Menutree";
import Screenfull from "@/components/Screenfull";
import { mapGetters } from "vuex";
export default {
  name: "Container",
  components: { Menutree, Screenfull },
  data() {
    return {
      trigger: true,
      isCollapsed: false
    };
  },
  computed: {
    ...mapGetters(["permission_routes"])
  },

  mounted() {},
  methods: {
    collapsedfuc() {
      if (this.isCollapsed == false) {
        this.isCollapsed = true;
      } else {
        this.isCollapsed = false;
      }
    },
    listenisCollapsedfuc(data) {
      console.log(data);
      this.isCollapsed = false;
    }
  }
};
</script>
<style scoped lang="less">
.layout {
  height: 100%;
  background: #eee;
  position: relative;
  overflow: hidden;
  .ivu-layout {
    height: 100%;
    background: #eee;
  }
  .top-header {
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    .top-nav {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
  }

  .log {
    width: 80px;
    height: 50px;

    float: left;
  }
  .ivu-layout-header {
    background: #ffffff;

    padding: 0;
    height: 50px;
    line-height: 50px;
  }
  .ivu-menu-horizontal {
    height: 50px;
    line-height: 50px;
  }
  .layout-nav {
    width: 700px;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    i {
      font-size: 20px;
    }
    .nav-item {
      color: #515a6e;
      width: 50px;
      text-align: center;
      cursor: pointer;
    }
    .nav-dropdown {
      display: flex;
      justify-content: center;
      width: 100px;
      .nav-dropdown-a {
        color: #515a6e;
        span {
          margin-right: 5px;
        }
      }
    }
  }
  .main {
    height: calc(100% - 50px);
    .sider {
      .sider-content {
        background: #000;
        height: 100%;
        width: 217px;
        overflow-y: scroll;

        background: #001529 !important;
      }
      width: 200px;
      height: 100%;
      background: #fff;
      overflow-x: hidden;
    }

    .container {
      height: 100%;
      .breadcrumb {
        height: 30px;
        border-bottom: 1px solid rgba(148, 146, 146, 0.12);
        background-color: #ffffff;
        .breadcrumb-container {
          .nav-collapsible {
            height: 30px;
            line-height: 30px;
            width: 40px;
            text-align: center;
            cursor: pointer;
          }
        }
      }
      .container-content {
        height: calc(100% - 30px);

        overflow-y: scroll;
        padding: 20px;
        .content {
          padding: 12px;
          border-radius: 4px;
          background: #fff;
          box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
}
.ivu-menu-vertical.ivu-menu-light:after {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  background: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}
</style>