<template>
  <div class="editor-wrapper">
    <div class="title">Vue-Quill-Editor —— 基于 Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用。</div>
    <quillEditor class="quillEditor"></quillEditor>
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  name:"VueQuillEditor",
  components: {
    quillEditor
  }
};
</script>
<style lang="less" scoped>
.title {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  font-size: 16px;
  margin: 20px 0;
  padding: 0 10px;
}
.quillEditor{
  height: 300px;
}
</style>