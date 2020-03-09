<template>
  <div>
    <Menu ref="Menu" class="menu-content" :accordion="accordion" theme="dark" width="auto">
      <template v-for="item in routes">
        <Submenu
          v-if="!item.hidden&&item.children&&item.children.length>1"
          :name="item.name"
          :key="item.name"
        >
          <template slot="title">
            <div @click="activefuc">
              <i class="iconfont" :class="item.meta.icon"></i>
              {{item.meta.title}}
            </div>
          </template>
          <menuTree :routes="item.children"></menuTree>
        </Submenu>
        <!-- 一级菜单 -->
        <MenuItem
          v-if="!item.hidden&&item.children&&item.children.length==1"
          :name="item.children[0].name"
          :key="item.children[0].name"
          :to="item.children[0].path"
        >
          <span>
            <i class="iconfont" :class="item.children[0].meta.icon"></i>
          </span>
          {{item.children[0].meta.title}}
        </MenuItem>
        <!-- 二级菜单 -->
        <MenuItem
          v-if="!item.hidden&&(!item.hasOwnProperty('children'))"
          :name="item.name"
          :key="item.name"
          :to="item.path"
        >{{item.meta.title}}</MenuItem>
      </template>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "menuTree",
  props: {
    routes: {
      type: Array
    },
    isCollapsed: {
      type: Boolean
    }
  },
  data() {
    return {
      accordion: false
    };
  },

  watch: {

  },
  mounted() {},
  methods: {
    handleClick(e) {},
    addActive(e) {},
    activefuc() {
      console.log("ererer");
      this.$emit("listenisCollapsed", true);
    }
  }
};
</script>

<style lang="less">
.ivu-menu-item {
  font-weight: 600;
}
.ivu-menu-submenu {
  font-weight: 600;
}

.ivu-menu-dark {
  background: #001529 !important;
}
.ivu-menu-vertical .ivu-menu-item,
.ivu-menu-vertical .ivu-menu-submenu-title {
  padding: 14px 14px !important;
  .iconfont {
    margin-right: 14px;
  }
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  color: #fff;
  background-color: #263445 !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  color: #fff;
  background: #515a6e;
}
.ivu-menu-submenu-title {
  &:hover {
    color: #fff;
    background: #001529 !important;
  }
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
  border-right: none;
  color: #fff;
  background: #363e4f !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item:hover {
  color: #fff;
  background: #363e4f !important;
}
</style>
