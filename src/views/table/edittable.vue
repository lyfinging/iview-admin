<template>
  <div class="edittable-container">
     <tables ref="tables" editable
        searchable 
        border
        search-place="top"
        v-model="tableData" 
        :columns="columns"
        @on-delete="handleDelete"/>

  </div>
</template>
<script>
import Tables from '@/components/tables'
export default {
  components: {
    Tables
  },
  data() {
    return {
      columns: [
        {
          title: "名称",
          key: "name",
          fixed: "left",
          width: 100
        },

        {
          title: "唤醒",
          key: "weak",
          width: 150,
          editable:true,
          sortable: true
        },
        {
          title: "登录",
          key: "signin",
          width: 150,
          editable:true,
          sortable: true
        },
        {
          title: "点击",
          key: "click",
          width: 150,
          editable:true,
          sortable: true
        },
        {
          title: "激活",
          key: "active",
          width: 150,
          editable:true,
          sortable: true
        },
        {
          title: "7日留存",
          key: "day7",
          width: 150,
          editable:true,
          sortable: true
        },
        {
          title: "30日留存",
          key: "day30",
          width: 150,
          editable:true,
          sortable: true
        },
        {
          title: "次日留存",
          key: "tomorrow",
          width: 150,
          editable:true,
          sortable: true
        },
        {
          title: "日活跃",
          key: "day",
          width: 150,
          editable:true,
          sortable: true
        },
        {
          title: "周活跃",
          key: "week",
          editable:true,
          width: 150,
          sortable: true
        },
        {
          title: "月活跃",
          key: "month",
          width: 150,
          sortable: true
        }
      ],
      tableData: [
        {
          name: "活动1",
          fav: 0,
          show: 7302,
          weak: 5627,
          signin: 1563,
          click: 4254,
          active: 1438,
          day7: 274,
          day30: 285,
          tomorrow: 1727,
          day: 558,
          week: 4440,
          month: 5610
        },
        {
          name: "活动2",
          fav: 0,
          show: 4720,
          weak: 4086,
          signin: 3792,
          click: 8690,
          active: 8470,
          day7: 8172,
          day30: 5197,
          tomorrow: 1684,
          day: 2593,
          week: 2507,
          month: 1537
        },
        {
          name: "活动3",
          fav: 0,
          show: 7181,
          weak: 8007,
          signin: 8477,
          click: 1879,
          active: 16,
          day7: 2249,
          day30: 3450,
          tomorrow: 377,
          day: 1561,
          week: 3219,
          month: 1588
        },
        {
          name: "活动4",
          fav: 0,
          show: 9911,
          weak: 8976,
          signin: 8807,
          click: 8050,
          active: 7668,
          day7: 1547,
          day30: 2357,
          tomorrow: 7278,
          day: 5309,
          week: 1655,
          month: 9043
        },
        {
          name: "活动5",
          fav: 0,
          show: 934,
          weak: 1394,
          signin: 6463,
          click: 5278,
          active: 9256,
          day7: 209,
          day30: 3563,
          tomorrow: 8285,
          day: 1230,
          week: 4840,
          month: 9908
        },
        {
          name: "活动6",
          fav: 0,
          show: 6856,
          weak: 1608,
          signin: 457,
          click: 4949,
          active: 2909,
          day7: 4525,
          day30: 6171,
          tomorrow: 1920,
          day: 1966,
          week: 904,
          month: 6851
        },
        {
          name: "活动7",
          fav: 0,
          show: 5107,
          weak: 6407,
          signin: 4166,
          click: 7970,
          active: 1002,
          day7: 8701,
          day30: 9040,
          tomorrow: 7632,
          day: 4061,
          week: 4359,
          month: 3676
        },
        {
          name: "活动8",
          fav: 0,
          show: 862,
          weak: 6520,
          signin: 6696,
          click: 3209,
          active: 6801,
          day7: 6364,
          day30: 6850,
          tomorrow: 9408,
          day: 2481,
          week: 1479,
          month: 2346
        },
       
      ]
    };
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },

  }
};
</script>
<style lang="less" scoped>
.button-container {
  margin-top: 10px;
  .button-item {
    margin-right: 5px;
  }
}
</style>