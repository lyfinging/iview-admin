<template>
  <div class="addspecification">
      <Card class="additem" :bordered="true">
              <p slot="title">设置规格</p>
              <div>
                    <draggable element="div"  class="specification-container">
                        <div class="specification-content" v-for="(item,index) in specificationData" :key="index">
                          <div class="specification-header">
                            <Row>
                              <Col span="10">
                                <Input v-model="item.specificationtype" placeholder="规格名称" />
                              </Col>
                              <Col span="4"><Button @click="specificationItemadd(item)" type="info" long>添加规格</Button></Col>
                              <Col span="2">
                                <div @click="specificationDelete(item,index)" class="deletebutton">
                                  <i class="iconfont iconshanchu"></i>
                                </div>
                              </Col>
                              <Col span="2">
                                <div class="movebutton">
                                  <Icon class="iconfont iconyidong"/>
                                </div>
                              </Col>
                            </Row> 
                          </div>
                          <div class="specification-body">
                            <div class="specification-item"  v-for="(items,indexs) in item.specificationitem" :key="indexs">
                              <div class="specification-item-top" >
                                  <div class="specification-radio">
                                    <Radio @on-change="onchange(index,indexs)" :value="items.default"></Radio></div>
                                  <div><input v-model="items.specificationitemname" class="specification-item-input"/></div>
                                  <div class="delete-iconfont" @click="specificationItemDelete(item.specificationitem,indexs)">
                                   <i class="iconfont iconshanchu"></i></div>
                              </div>
                              <div class="specification-item-bottom">
                                  <div>
                                    <Select @on-change="selectchange(items,indexs)" v-model="items.inputxttype">
                                        <Option value=1>输入</Option>
                                        <Option value="2">颜色</Option>
                                     
                                    </Select>
                                  </div>
                                  <div>
                                    <Input class="specification-item-input" :disabled="!(items.inputxttype==1)" v-model="items.inputcont" />
                                  </div>
                                  <div v-show="items.inputxttype==2"><ColorPicker v-model="items.inputcont" /></div>
                        
                              </div>
                            </div> 
                          </div>
                        </div>
                    </draggable >
                    <div class="specification-add">
                      <div><Button @click="specificationAdd()" type="primary">添加规格</Button> </div>
                      <div><Button type="primary" @click="refreshtable()">刷新规格项目列表</Button></div>
                    </div>
              </div>
      </Card>
      <Card :bordered="true">
            <p slot="title">项目列表</p>
            <p style="overflow-x: scroll">
              <table id="specificationtable">
                <thead>
                  <tr>
                    <td class="tabletitle" v-for="itemh in theaddata" :key="itemh.index">{{itemh}}</td>
                   
                    <td>
                      实际库存
                      <div class="check-all">
                        <div>
                           <Input v-model="realdata" />
                         </div>
                        <div><Button @click="checkallfuc(realdata,'repertoryreal')" icon="md-done-all"></Button></div>
                      </div>
                    </td>
                    <td>
                      虚拟库存
                       <div class="check-all">
                        <div>
                          <Input v-model="virtualinventorydata" />
                         </div>
                        <div><Button @click="checkallfuc(virtualinventorydata,'virtualinventory')" icon="md-done-all"></Button></div>
                      </div>
                    </td>
                    <td>
                      预售价
                       <div class="check-all">
                        <div>
                          <Input v-model="beforehandpricedata" />
                        </div>
                        <div><Button icon="md-done-all"  @click="checkallfuc(beforehandpricedata,'beforehandprice')"></Button></div>
                      </div>
                    </td>
                    <td>
                      现价
                       <div class="check-all">
                        <div>
                          <Input v-model="rulingpricedata" />
                        </div>
                        <div><Button @click="checkallfuc(rulingpricedata,'rulingprice')" icon="md-done-all"></Button></div>
                        </div>
                    </td>
                    <td>
                      原价
                      <div class="check-all">
                        <div>
                          <Input v-model="originalpricedata" />

                        </div>
                       <div><Button @click="checkallfuc(originalpricedata,'originalprice')" icon="md-done-all"></Button></div>
                        </div>
                    </td>
                    <td>
                      编码
                      <div class="check-all">
                        <div>
                           <Input v-model="codingdata" />
                        </div>
                       <div><Button @click="checkallfuc(codingdata,'coding')" icon="md-done-all"></Button></div>
                        </div>
                    </td>
                    <td>
                      条码
                      <div class="check-all">
                        <div>
                          <Input v-model="barcodedata" />
                        </div>
                       <div><Button @click="checkallfuc(barcodedata,'barcode')" icon="md-done-all"></Button></div>
                        </div>
                    </td>
                    <td>
                      重量（克）
                     <div class="check-all">
                        <div>
                           <Input v-model="weightdata" />
                        </div>
                        <div><Button @click="checkallfuc(weightdata,'weight')" icon="md-done-all"></Button></div>
                    </div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(itemb,index) in tbodydata" :key="index">
                    <td v-for="(itemc,indexs) in itemb.specification" :key="indexs">
                      {{itemc}}
                    </td>

                    <td>
                      <Input v-model="itemb.repertoryreal" />

                    </td>
                    <td>
                       <Input v-model="itemb.virtualinventory" />
                    </td>
                     <td>
                       <Input v-model="itemb.beforehandprice" />
                    </td>
                    <td>
                       <Input v-model="itemb.rulingprice" />
                     
                    </td>
                     <td>
                      <Input v-model="itemb.originalprice" />
                    </td>
                    <td>
                       <Input v-model="itemb.coding" />
                     
                    </td>
                    <td>
                       <Input v-model="itemb.barcode" />
                  
                    </td>
                     <td>
                       <Input v-model="itemb.weight" />
                    </td>
                  </tr>                  
                </tbody>
              </table>
            </p>
      </Card>
  </div>
</template>
<script>

import draggable from "vuedraggable";
import Sortable from "sortablejs";

import { constants } from 'crypto';
export default {
  name: "addSpecification",
  components: {

    draggable,
    Sortable,
  },
  data () {
    return {
      specificationData:[],
      data:[],
      sfmgshowup:false,
      specificationTabledata:[],
      theaddata:[],
      tbodydata:[],
      tabledata:[],
      realdata:'',
      virtualinventorydata:'',
      beforehandpricedata:'',
      rulingpricedata:'',
      originalpricedata:'',
      codingdata:'',
      barcodedata:'',
      weightdata:'' 
    }
  },
  methods: {
    // 选择改变输入方式时清空输入框
    selectchange:function(items,indexs){
      items.inputcont=""
    },

    // 删除选择的图片
    imgdelete:function(items){
      items.inputcont=""
    },







    // 添加规格种类
    specificationAdd:function(){
      let obj={};
      obj.specificationtype="",
      obj.specificationitem=[],  
      this.specificationData.push(obj)
    },

    // 添加规格
    specificationItemadd:function(item){
      let obj={};
      obj.specificationitemname="",
      obj.default=false,
      obj.open=0,
      obj.inputxttype=''
      obj.inputcont=''
      item.specificationitem.push(obj)
    },

   // 删除规格种类
   specificationDelete:function(item,index){
     this.specificationData.splice(index,1) 
   },

    // 删除规格
   specificationItemDelete:function(items,indexs){
      items.splice(indexs,1)
   },

  //  单选按钮
   onchange:function (id,ids) {
     let _this = this
     _this.specificationData[id] ? 
     _this.specificationData[id].specificationitem.map((v,i) => {
        if(i == ids){
          v.default = true
        }else{
          v.default = false
        }
     }) : null
   },
   //  刷新表格、提取后台数据
  refreshtable:function(){
      console.log("specificationData",this.specificationData)
      this.tbodyfuc(this.specificationData)
      this.theadfuc(this.specificationData)
  },

  //  表格表头数据渲染
  theadfuc:function(res){
    let temporaryarr=[]
    for(let item in res){ 
     temporaryarr.push(res[item].specificationtype)
    }
    this.theaddata=temporaryarr;
  },

  //  表格数据渲染
  tbodyfuc:function(res){ 
    let temporaryarr=[]
    let temporaryarr2=[]
    let temporaryarr3=[]
    let temporaryarr4=[]
    let iteml=temporaryarr.length;
    for(let item in res){
      temporaryarr.push(res[item].specificationitem)
    }
    for(let i=0;i<temporaryarr.length;i++){
      for(let items in temporaryarr[i]){
        temporaryarr2.push(temporaryarr[i][items].specificationitemname)
      }
      temporaryarr3.push(temporaryarr2)
      temporaryarr2=[]
    }
    temporaryarr4=this.calcDescartes(temporaryarr3)
    
    for(let i=0;i<temporaryarr4.length;i++){
      let obj={};
      obj.specification=[],
      obj.size1=[],
      obj.size2=[],
      obj.size3=[],
      obj.repertoryreal='',
      obj.virtualinventory='',
      obj.beforehandprice='',
      obj.rulingprice='',
      obj.originalprice='',
      obj.coding='',
      obj.barcode='',
      obj.weight='' 
      obj.specification = temporaryarr4[i]
      this.tbodydata.push(obj)
    }  
  },

  // 笛卡尔积求出所有组合
  calcDescartes:function(array) {
      if (array.length < 2) return array[0] || [];
      return [].reduce.call(array, function (col, set) {
          var res = [];
          col.forEach(function (c) {
              set.forEach(function (s) {
                  var t = [].concat(Array.isArray(c) ? c : [c]);
                  t.push(s);
                  res.push(t);
              })
          });
          return res;
      });
  },

  //实现全选
  checkallfuc:function(data,type){
    console.log(type)
    if(type=='repertoryreal'){
      for(let i=0;i<this.tbodydata.length;i++){
        this.tbodydata[i].repertoryreal=data
      }
    }
    else if(type=='virtualinventory'){
      for(let i=0;i<this.tbodydata.length;i++){
        this.tbodydata[i].virtualinventory=data
      }
    }
    else if(type=='beforehandprice'){
      for(let i=0;i<this.tbodydata.length;i++){
        this.tbodydata[i].beforehandprice=data
      }
    }
    else if(type=='rulingprice'){
      for(let i=0;i<this.tbodydata.length;i++){
        this.tbodydata[i].rulingprice=data
      }
    }
    else if(type=='originalprice'){
      for(let i=0;i<this.tbodydata.length;i++){
        this.tbodydata[i].originalprice=data
      }
    }
    else if(type=='coding'){
      for(let i=0;i<this.tbodydata.length;i++){
        this.tbodydata[i].coding=data
      }
    }
    else if(type=='barcode'){
      for(let i=0;i<this.tbodydata.length;i++){
        this.tbodydata[i].barcode=data
      }
    }
    else if(type=='weight'){
      for(let i=0;i<this.tbodydata.length;i++){
        this.tbodydata[i].weight=data
        console.log("2323")
      }
    }
    else{

    } 
    }
  }


};
</script>
<style>
    @import url(./index.css);
</style>
