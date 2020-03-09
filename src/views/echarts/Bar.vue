<template>
  <div>
    <div id="myChart" class="myChart-item"></div>
    <div id="myChart2" class="myChart-item"></div>
  </div>
</template>
<script>
export default {
  name: "BarChart",
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

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "一周销量变化"
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },

            saveAsImage: {}
          }
        },
        color: "#675bba",
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [1200, 1000, 560, 800, 700, 100, 1300],
            type: "bar"
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 指定图表的配置项和数据
      let option = {
        color: "#d14a61",
        title: {
          text: "动态数据",
          subtext: "纯属虚构"
        },

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#d14a61"
            }
          }
        },
        legend: {
          data: ["最新成交价", "预购队列"]
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },

            saveAsImage: {}
          }
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            data: (function() {
              var now = new Date();
              var res = [];
              var len = 10;
              while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
                now = new Date(now - 2000);
              }
              return res;
            })()
          },
          {
            type: "category",
            boundaryGap: true,
            data: (function() {
              var res = [];
              var len = 10;
              while (len--) {
                res.push(10 - len - 1);
              }
              return res;
            })()
          }
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            name: "价格",
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: "value",
            scale: true,
            name: "预购量",
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            name: "预购队列",
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: (function() {
              var res = [];
              var len = 10;
              while (len--) {
                res.push(Math.round(Math.random() * 1000));
              }
              return res;
            })()
          },
          {
            name: "最新成交价",
            type: "line",
            data: (function() {
              var res = [];
              var len = 0;
              while (len < 10) {
                res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                len++;
              }
              return res;
            })()
          }
        ]
      };
      app.count = 11;
      setInterval(function() {
        var axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");

        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(app.count++);

        myChart.setOption(option);
      }, 2100);
      // 使用刚指定的配置项和数据显示图表。
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