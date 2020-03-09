<template>
  <div>
    <div id="myChart" class="myChart-item"></div>
    <div id="myChart2" class="myChart-item"></div>
  </div>
</template>
<script>
export default {
  name: "lineChart",
  data() {
    return {};
  },
  mounted() {
    this.drawChart();
    this.drawChart2();
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let colors = ["#5793f3", "#d14a61", "#675bba"];
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      let colors = ["#5793f3", "#d14a61", "#675bba"];
      let data = genData(50);
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "同名数量统计",
          subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: data.legendData,

          selected: data.selected
        },
        series: [
          {
            name: "姓名",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: data.seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      function genData(count) {
        var nameList = [
          "赵",
          "钱",
          "孙",
          "李",
          "周",
          "吴",
          "郑",
          "王",
          "冯",
          "陈",
          "褚",
          "卫",
          "蒋",
          "沈",
          "韩",
          "杨",
          "朱",
          "秦",
          "尤",
          "许",
          "何",
          "吕",
          "施",
          "张",
          "孔",
          "曹",
          "严",
          "华",
          "金",
          "魏",
          "陶",
          "姜",
          "戚",
          "谢",
          "邹",
          "喻",
          "柏",
          "水",
          "窦",
          "章",
          "云",
          "苏",
          "潘",
          "葛",
          "奚",
          "范",
          "彭",
          "郎",
          "鲁",
          "韦",
          "昌",
          "马",
          "苗",
          "凤",
          "花",
          "方",
          "俞",
          "任",
          "袁",
          "柳",
          "酆",
          "鲍",
          "史",
          "唐",
          "费",
          "廉",
          "岑",
          "薛",
          "雷",
          "贺",
          "倪",
          "汤",
          "滕",
          "殷",
          "罗",
          "毕",
          "郝",
          "邬",
          "安",
          "常",
          "乐",
          "于",
          "时",
          "傅",
          "皮",
          "卞",
          "齐",
          "康",
          "伍",
          "余",
          "元",
          "卜",
          "顾",
          "孟",
          "平",
          "黄",
          "和",
          "穆",
          "萧",
          "尹",
          "姚",
          "邵",
          "湛",
          "汪",
          "祁",
          "毛",
          "禹",
          "狄",
          "米",
          "贝",
          "明",
          "臧",
          "计",
          "伏",
          "成",
          "戴",
          "谈",
          "宋",
          "茅",
          "庞",
          "熊",
          "纪",
          "舒",
          "屈",
          "项",
          "祝",
          "董",
          "梁",
          "杜",
          "阮",
          "蓝",
          "闵",
          "席",
          "季",
          "麻",
          "强",
          "贾",
          "路",
          "娄",
          "危"
        ];
        var legendData = [];
        var seriesData = [];
        var selected = {};
        for (var i = 0; i < count; i++) {
          name =
            Math.random() > 0.65
              ? makeWord(4, 1) + "·" + makeWord(3, 0)
              : makeWord(2, 1);
          legendData.push(name);
          seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000)
          });
          selected[name] = i < 6;
        }

        return {
          legendData: legendData,
          seriesData: seriesData,
          selected: selected
        };

        function makeWord(max, min) {
          var nameLen = Math.ceil(Math.random() * max + min);
          var name = [];
          for (var i = 0; i < nameLen; i++) {
            name.push(
              nameList[Math.round(Math.random() * nameList.length - 1)]
            );
          }
          return name.join("");
        }
      }
      function genData(count) {
    var nameList = [
        '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
    ];
    var legendData = [];
    var seriesData = [];
    var selected = {};
    for (var i = 0; i < count; i++) {
        name = Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1);
        legendData.push(name);
        seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000)
        });
        selected[name] = i < 6;
    }

    return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
    };

    function makeWord(max, min) {
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
        }
        return name.join('');
    }
}
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
.myChart-item {
  width: 800px;
  height: 400px;
  margin-bottom: 20px;
}
</style>