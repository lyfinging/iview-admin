<template>
  <div class="editor-wrapper">
    <div class="title">wangEditor —— 轻量级 web 富文本编辑器，配置方便，使用简单。支持 IE10+ 浏览器。</div>
    <div :id="editorId"></div>
  </div>
</template>

<script>
import Editor from "wangeditor";
import "wangeditor/release/wangEditor.min.css";
export default {
  name: "Editor",

  computed: {
    editorId() {
      return `editor${this._uid}`;
    }
  },
  methods: {
    setHtml(val) {
      this.editor.txt.html(val);
    }
  },
  mounted() {
    this.editor = new Editor(`#${this.editorId}`);
    this.editor.customConfig.onchange = html => {
      let text = this.editor.txt.text();
      if (this.cache) localStorage.editorCache = html;
      this.$emit("input", this.valueType === "html" ? html : text);
      this.$emit("on-change", html, text);
    };
    this.editor.customConfig.onchangeTimeout = this.changeInterval;
    // create这个方法一定要在所有配置项之后调用
    this.editor.create();
    // 如果本地有存储加载本地存储内容
    let html = this.value || localStorage.editorCache;
    if (html) this.editor.txt.html(html);
  }
};
</script>

<style lang="less" scoped>
.editor-wrapper * {
  z-index: 100 !important;
}
.title {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  font-size: 16px;
  margin: 20px 0;
  padding: 0 10px;
}
</style>
