webpackJsonp([6],{391:function(n,t,e){e(702);var r=e(0)(e(520),e(819),"data-v-ba9e980e",null);n.exports=r.exports},519:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{lists:Array,forwarddaifan:Function,onTabClick:Function},methods:{forwardToDaifan:function(){$router.forward("/rebate/orderlist/daifan")},onClick:function(n){this.onTabClick&&this.onTabClick(n),$router.forward("/rebate/orderlist/daifan")}}}},520:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(20),o=e.n(r),i=e(741),a=e.n(i),s=e(740),A=e.n(s),l=e(739),d=e.n(l),c=e(3);t.default={components:{AnimateHeader:o.a,TabLayout:a.a,List:A.a,Complain:d.a},data:function(){return{barWidth:271,tabLinks:[{to:{path:"/rebate/orderlist/daifan"},text:"待返利"},{to:{path:"/rebate/orderlist/yifan"},text:"已返利"},{to:{path:"/rebate/orderlist/yitui"},text:"已退货"},{to:{path:"/rebate/orderlist/shensu"},text:"订单比对"}],activeIndex:0,loaded:!1,daifanLists:[],yifanLists:[],yituiLists:[],appealLists:[],daifanOffset:"",yifanOffset:"",yituiOffset:"",noMoreDaifan:!0,noMoreYifan:!0,noMoreYitui:!0,type:"daifan",PAGE_SIZE:10,shensuHasNew:!1}},mounted:function(){if("fanli_orderlist"===this.$route.name)return void(this.tabLinks=[{to:{path:"/fanli/orderlist/daifan"},text:"待返利"},{to:{path:"/fanli/orderlist/yifan"},text:"已返利"},{to:{path:"/fanli/orderlist/yitui"},text:"已退货"}]);this.type=this.$route.params.type,"daifan"===this.type?this.activeIndex=0:"yifan"===this.type?this.activeIndex=1:"yitui"===this.type?this.activeIndex=2:this.activeIndex=3,this.fetchData()},methods:{fetchData:function(){var n=this;$loading.show("加载中..."),$api.jifenbaoUserOrderAll().then(function(n){return n.data&&n.data.payload}).then(function(t){var e=t.wait,r=t.complete,o=t.refurn,i=t.complain;n.loaded=!0,_.each(e,function(t,r){r===e.length-1&&_.each(t.orders,function(e,r){r===t.orders.length-1&&(n.daifanOffset=e.id)})}),_.each(r,function(t,e){e===r.length-1&&_.each(t.orders,function(e,r){r===t.orders.length-1&&(n.yifanOffset=e.id)})}),_.each(o,function(t,e){e===o.length-1&&_.each(t.orders,function(e,r){r===t.orders.length-1&&(n.yituiOffset=e.id)})}),n.daifanLists=e,n.yifanLists=r,n.yituiLists=o,n.appealLists=i,"shensu"===n.type&&n.syncAppealLists();var a=$storage.get(c.y)||[];_.each(n.appealLists,function(t){_.each(t.orders,function(t){var e=t.id+":"+t.order_sn;-1===a.indexOf(e)&&(n.shensuHasNew=!0)})}),setTimeout($loading.hide,300),setTimeout(function(){n.noMoreDaifan=n._numberLists(e)<n.PAGE_SIZE,n.noMoreYifan=n._numberLists(r)<n.PAGE_SIZE,n.noMoreYitui=n._numberLists(o)<n.PAGE_SIZE},1500)})},infiniteDaifan:function(n){var t=this;if(this.noMoreDaifan)return void n();this._list(0,this.daifanOffset).then(function(e){setTimeout(function(){if(t.noMoreDaifan=0===t._numberLists(e)||t._numberLists(e)<t.PAGE_SIZE,0===t._numberLists(e))return void n();t._format(e,t.daifanLists),t.daifanLists=t.daifanLists.concat(e),n()},1500)})},infiniteYifan:function(n){var t=this;if(this.noMoreYifan)return void n();this._list(1,this.yifanOffset).then(function(e){setTimeout(function(){if(t.noMoreYifan=0===t._numberLists(e)||t._numberLists(e)<t.PAGE_SIZE,0===t._numberLists(e))return void n();t._format(e,t.yifanLists),t.yifanLists=t.yifanLists.concat(e),n()},1500)})},infiniteYitui:function(n){var t=this;if(this.noMoreYitui)return void n();this._list(2,this.yituiOffset).then(function(e){setTimeout(function(){if(t.noMoreYitui=0===t._numberLists(e)||t._numberLists(e)<t.PAGE_SIZE,0===t._numberLists(e))return void n();t._format(e,t.yituiLists),t.yituiLists=t.yituiLists.concat(e),n()},1500)})},_list:function(n,t){var e=this;return $api.jifenbaoUserOrder(n,t).then(function(n){return n.data&&n.data.payload}).then(function(t){var r=t,o=void 0;return _.each(r,function(n,t){t===r.length-1&&_.each(n.orders,function(t,e){e===n.orders.length-1&&(o=t.id)})}),0===n&&(e.daifanOffset=o),1===n&&(e.yifanOffset=o),2===n&&(e.yituiOffset=o),r})},_format:function(n,t){var e=n[0].date,r=t.length-1;e===t[r].date&&(t[r].orders=t[r].orders.concat(n[0].orders),n.splice(0,1))},_numberLists:function(n){var t=0;return _.each(n,function(n,e){t+=n.orders.length}),t},back:function(){$router.back("/user")},fowardToComplain:function(){$router.forward("/rebate/appeal")},syncAppealLists:function(){var n=[];_.each(this.appealLists,function(t){_.each(t.orders,function(t){var e=t.id+":"+t.order_sn;n.push(e)})}),$storage.set(c.y,n)},onTabClick:function(n){this.activeIndex=n,3===n&&(this.syncAppealLists(),this.shensuHasNew=!1)}}}},521:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{infinite:Function,lists:Array,showTips:Boolean,showPlus:{type:Boolean,default:!0}},mounted:function(){var n=this;$bus.$on("scrollTotop",function(t){n.$refs.scroller.scrollTo(0,0,!0)})},methods:{fowardToComplain:function(){$router.forward("/rebate/appeal")},format:function(n){var t=n.substr(5,2);"0"===t.charAt(0)&&(t=t.substr(1,1));var e=n.substr(8,2);return"0"===e.charAt(0)&&(e=e.substr(1,1)),t+"月"+e+"日"}}}},522:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{links:Array,numbered:{type:Boolean,default:!1},barWidth:{type:Number,required:!0},bgColor:{type:String,default:"#f5f5f5"},onInit:Function,onTabClick:Function,useContentSlot:{type:String,default:"false"},hasNew:{type:Boolean,default:!1}},methods:{onClick:function(n){this.onTabClick&&this.onTabClick(n)}}}},583:function(n,t,e){t=n.exports=e(360)(),t.push([n.i,"\n.button-bar > .button[data-v-34eb2046]:first-child {\n  border-radius: 0;\n}\n.button-bar > .button[data-v-34eb2046]:last-child {\n  border-radius: 0;\n}\n.layout .credit-bar[data-v-34eb2046] {\n  width: 100%;\n}\n.layout .credit-bar .button-bar[data-v-34eb2046] {\n    margin: 0 auto;\n    min-width: 270px;\n    border-radius: 0 0 0 0;\n    -webkit-flex: 0;\n        -ms-flex: 0;\n            flex: 0;\n    -webkit-box-flex: 0;\n}\n.layout .credit-bar .button-bar .label-container[data-v-34eb2046] {\n      position: relative;\n}\n.layout .credit-bar .button-bar .label-container.numbered[data-v-34eb2046] {\n        left: 15px;\n}\n.layout .credit-bar .button-bar .label-container.numbered .number[data-v-34eb2046] {\n          display: block;\n}\n.layout .credit-bar .button-bar .label-container .number[data-v-34eb2046] {\n        display: none;\n        border-radius: 15px;\n        position: absolute;\n        padding: 0;\n        width: 15px;\n        vertical-align: bottom;\n        height: 15px;\n        top: 2px;\n        right: 100%;\n        margin-right: 5px;\n        border: 1px solid;\n}\n.layout .credit-bar .button-bar .label-container .number span[data-v-34eb2046] {\n          position: absolute;\n          top: -14px;\n          width: 100%;\n          left: 0;\n          text-align: center;\n}\n.layout .credit-bar .button-bar .button[data-v-34eb2046] {\n      height: 46px;\n      min-height: 46px;\n      line-height: 46px;\n      font-size: 13px;\n      color: #888888;\n      position: relative;\n}\n.layout .credit-bar .button-bar .button .red-dot[data-v-34eb2046] {\n        position: absolute;\n        display: inline-block;\n        width: 4px;\n        height: 4px;\n        background: #EF4F2A;\n        border-radius: 50%;\n        top: 14px;\n        right: 16px;\n}\n.layout .credit-bar .button-bar .button.router-link-active[data-v-34eb2046] {\n        background-color: #FFF;\n        color: #3A3A3A;\n}\n","",{version:3,sources:["/Users/wumin/diablo/src/components/rebate/orderlist/TabLayout.vue"],names:[],mappings:";AACA;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,YAAY;CACb;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;QACZ,YAAY;YACR,QAAQ;IAChB,oBAAoB;CACvB;AACD;MACM,mBAAmB;CACxB;AACD;QACQ,WAAW;CAClB;AACD;UACU,eAAe;CACxB;AACD;QACQ,cAAc;QACd,oBAAoB;QACpB,mBAAmB;QACnB,WAAW;QACX,YAAY;QACZ,uBAAuB;QACvB,aAAa;QACb,SAAS;QACT,YAAY;QACZ,kBAAkB;QAClB,kBAAkB;CACzB;AACD;UACU,mBAAmB;UACnB,WAAW;UACX,YAAY;UACZ,QAAQ;UACR,mBAAmB;CAC5B;AACD;MACM,aAAa;MACb,iBAAiB;MACjB,kBAAkB;MAClB,gBAAgB;MAChB,eAAe;MACf,mBAAmB;CACxB;AACD;QACQ,mBAAmB;QACnB,sBAAsB;QACtB,WAAW;QACX,YAAY;QACZ,oBAAoB;QACpB,mBAAmB;QACnB,UAAU;QACV,YAAY;CACnB;AACD;QACQ,uBAAuB;QACvB,eAAe;CACtB",file:"TabLayout.vue",sourcesContent:["\n.button-bar > .button[data-v-34eb2046]:first-child {\n  border-radius: 0;\n}\n.button-bar > .button[data-v-34eb2046]:last-child {\n  border-radius: 0;\n}\n.layout .credit-bar[data-v-34eb2046] {\n  width: 100%;\n}\n.layout .credit-bar .button-bar[data-v-34eb2046] {\n    margin: 0 auto;\n    min-width: 270px;\n    border-radius: 0 0 0 0;\n    -webkit-flex: 0;\n        -ms-flex: 0;\n            flex: 0;\n    -webkit-box-flex: 0;\n}\n.layout .credit-bar .button-bar .label-container[data-v-34eb2046] {\n      position: relative;\n}\n.layout .credit-bar .button-bar .label-container.numbered[data-v-34eb2046] {\n        left: 15px;\n}\n.layout .credit-bar .button-bar .label-container.numbered .number[data-v-34eb2046] {\n          display: block;\n}\n.layout .credit-bar .button-bar .label-container .number[data-v-34eb2046] {\n        display: none;\n        border-radius: 15px;\n        position: absolute;\n        padding: 0;\n        width: 15px;\n        vertical-align: bottom;\n        height: 15px;\n        top: 2px;\n        right: 100%;\n        margin-right: 5px;\n        border: 1px solid;\n}\n.layout .credit-bar .button-bar .label-container .number span[data-v-34eb2046] {\n          position: absolute;\n          top: -14px;\n          width: 100%;\n          left: 0;\n          text-align: center;\n}\n.layout .credit-bar .button-bar .button[data-v-34eb2046] {\n      height: 46px;\n      min-height: 46px;\n      line-height: 46px;\n      font-size: 13px;\n      color: #888888;\n      position: relative;\n}\n.layout .credit-bar .button-bar .button .red-dot[data-v-34eb2046] {\n        position: absolute;\n        display: inline-block;\n        width: 4px;\n        height: 4px;\n        background: #EF4F2A;\n        border-radius: 50%;\n        top: 14px;\n        right: 16px;\n}\n.layout .credit-bar .button-bar .button.router-link-active[data-v-34eb2046] {\n        background-color: #FFF;\n        color: #3A3A3A;\n}\n"],sourceRoot:""}])},595:function(n,t,e){t=n.exports=e(360)(),t.push([n.i,"/* thin border */\n.rebate-order {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.rebate-order .no-orderlist-scroller .no-orderlist {\n    width: 222px;\n    height: 248px;\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -124px;\n    margin-left: -111px;\n}\n.rebate-order .no-orderlist-scroller ._v-content {\n    height: 100%;\n}\n.rebate-order .order-scroll .tips {\n    margin: 20px auto;\n    width: 343px;\n    height: 40px;\n    line-height: 40px;\n    background: #FFF8EE;\n    text-align: center;\n}\n.rebate-order .order-scroll .tips span {\n      font-size: 12px;\n      color: #3A3A3A;\n      line-height: 17px;\n}\n.rebate-order .order-scroll .tips .cffa {\n      color: #FB800C;\n      font-size: 12px;\n      text-decoration: underline;\n      padding: 12px 0;\n}\n.rebate-order .order-scroll ._v-content {\n    padding-bottom: 70px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item {\n      font-family: PingFangSC-Regular;\n      padding: 0px 16px;\n      margin-top: 20px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .date {\n        font-size: 20px;\n        color: #DDDDDD;\n        line-height: 28px;\n        margin-bottom: 4px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc {\n        position: relative;\n        padding: 12px 0px 20px 0px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .title {\n          font-size: 14px;\n          color: #3A3A3A;\n          line-height: 22px;\n          width: 259px;\n          height: 44px;\n          margin-bottom: 6px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 2;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .price-numbers {\n          width: 84px;\n          position: absolute;\n          right: 0px;\n          top: 14px;\n          text-align: right;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .price-numbers .price {\n            font-size: 14px;\n            color: #3A3A3A;\n            line-height: 20px !important;\n            margin-bottom: 2px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .price-numbers .price .font-10 {\n              font-size: 10px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .price-numbers .numbers {\n            font-family: PingFangSC-Light;\n            font-size: 12px;\n            color: #B5B5B5;\n            line-height: 17px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .commission {\n          font-size: 12px;\n          line-height: 28px;\n          height: 28px;\n          box-sizing: border-box;\n          color: #FB800C;\n          margin-bottom: 10px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .commission .plus {\n            margin-right: 2px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .commission .font-20 {\n            font-size: 20px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .commission .color-desc {\n            color: #FFA70F;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .type {\n          float: right;\n          font-size: 12px;\n          color: #3A3A3A;\n          line-height: 17px;\n          padding-top: 8px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .type span.daifan {\n            color: #4A90E2;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .type.daifan {\n          color: #B5B5B5;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info {\n          font-family: PingFangSC-Light;\n          font-size: 12px;\n          color: #B5B5B5;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-num {\n            line-height: 17px;\n            margin-bottom: 2px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-num .right {\n              float: right;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-created_at {\n            line-height: 17px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-created_at .right {\n              float: right;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-estimate_time {\n            line-height: 17px;\n            margin-bottom: 2px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-estimate_time .right {\n              float: right;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-product_from {\n            line-height: 17px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-product_from .right {\n              float: right;\n}\n","",{version:3,sources:["/Users/wumin/diablo/src/components/rebate/orderlist/List.vue"],names:[],mappings:"AAAA,iBAAiB;AACjB;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;CACpB;AACD;IACI,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,oBAAoB;CACvB;AACD;IACI,aAAa;CAChB;AACD;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;CACtB;AACD;MACM,gBAAgB;MAChB,eAAe;MACf,kBAAkB;CACvB;AACD;MACM,eAAe;MACf,gBAAgB;MAChB,2BAA2B;MAC3B,gBAAgB;CACrB;AACD;IACI,qBAAqB;CACxB;AACD;MACM,gCAAgC;MAChC,kBAAkB;MAClB,iBAAiB;CACtB;AACD;QACQ,gBAAgB;QAChB,eAAe;QACf,kBAAkB;QAClB,mBAAmB;CAC1B;AACD;QACQ,mBAAmB;QACnB,2BAA2B;CAClC;AACD;UACU,gBAAgB;UAChB,eAAe;UACf,kBAAkB;UAClB,aAAa;UACb,aAAa;UACb,mBAAmB;UACnB,iBAAiB;UACjB,wBAAwB;UACxB,qBAAqB;UACrB,sBAAsB;CAC/B;AACD;UACU,YAAY;UACZ,mBAAmB;UACnB,WAAW;UACX,UAAU;UACV,kBAAkB;CAC3B;AACD;YACY,gBAAgB;YAChB,eAAe;YACf,6BAA6B;YAC7B,mBAAmB;CAC9B;AACD;cACc,gBAAgB;CAC7B;AACD;YACY,8BAA8B;YAC9B,gBAAgB;YAChB,eAAe;YACf,kBAAkB;CAC7B;AACD;UACU,gBAAgB;UAChB,kBAAkB;UAClB,aAAa;UACb,uBAAuB;UACvB,eAAe;UACf,oBAAoB;CAC7B;AACD;YACY,kBAAkB;CAC7B;AACD;YACY,gBAAgB;CAC3B;AACD;YACY,eAAe;CAC1B;AACD;UACU,aAAa;UACb,gBAAgB;UAChB,eAAe;UACf,kBAAkB;UAClB,iBAAiB;CAC1B;AACD;YACY,eAAe;CAC1B;AACD;UACU,eAAe;CACxB;AACD;UACU,8BAA8B;UAC9B,gBAAgB;UAChB,eAAe;CACxB;AACD;YACY,kBAAkB;YAClB,mBAAmB;CAC9B;AACD;cACc,aAAa;CAC1B;AACD;YACY,kBAAkB;CAC7B;AACD;cACc,aAAa;CAC1B;AACD;YACY,kBAAkB;YAClB,mBAAmB;CAC9B;AACD;cACc,aAAa;CAC1B;AACD;YACY,kBAAkB;CAC7B;AACD;cACc,aAAa;CAC1B",file:"List.vue",sourcesContent:["/* thin border */\n.rebate-order {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.rebate-order .no-orderlist-scroller .no-orderlist {\n    width: 222px;\n    height: 248px;\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -124px;\n    margin-left: -111px;\n}\n.rebate-order .no-orderlist-scroller ._v-content {\n    height: 100%;\n}\n.rebate-order .order-scroll .tips {\n    margin: 20px auto;\n    width: 343px;\n    height: 40px;\n    line-height: 40px;\n    background: #FFF8EE;\n    text-align: center;\n}\n.rebate-order .order-scroll .tips span {\n      font-size: 12px;\n      color: #3A3A3A;\n      line-height: 17px;\n}\n.rebate-order .order-scroll .tips .cffa {\n      color: #FB800C;\n      font-size: 12px;\n      text-decoration: underline;\n      padding: 12px 0;\n}\n.rebate-order .order-scroll ._v-content {\n    padding-bottom: 70px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item {\n      font-family: PingFangSC-Regular;\n      padding: 0px 16px;\n      margin-top: 20px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .date {\n        font-size: 20px;\n        color: #DDDDDD;\n        line-height: 28px;\n        margin-bottom: 4px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc {\n        position: relative;\n        padding: 12px 0px 20px 0px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .title {\n          font-size: 14px;\n          color: #3A3A3A;\n          line-height: 22px;\n          width: 259px;\n          height: 44px;\n          margin-bottom: 6px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 2;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .price-numbers {\n          width: 84px;\n          position: absolute;\n          right: 0px;\n          top: 14px;\n          text-align: right;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .price-numbers .price {\n            font-size: 14px;\n            color: #3A3A3A;\n            line-height: 20px !important;\n            margin-bottom: 2px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .price-numbers .price .font-10 {\n              font-size: 10px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .price-numbers .numbers {\n            font-family: PingFangSC-Light;\n            font-size: 12px;\n            color: #B5B5B5;\n            line-height: 17px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .commission {\n          font-size: 12px;\n          line-height: 28px;\n          height: 28px;\n          box-sizing: border-box;\n          color: #FB800C;\n          margin-bottom: 10px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .commission .plus {\n            margin-right: 2px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .commission .font-20 {\n            font-size: 20px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .commission .color-desc {\n            color: #FFA70F;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .type {\n          float: right;\n          font-size: 12px;\n          color: #3A3A3A;\n          line-height: 17px;\n          padding-top: 8px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .type span.daifan {\n            color: #4A90E2;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .type.daifan {\n          color: #B5B5B5;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info {\n          font-family: PingFangSC-Light;\n          font-size: 12px;\n          color: #B5B5B5;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-num {\n            line-height: 17px;\n            margin-bottom: 2px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-num .right {\n              float: right;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-created_at {\n            line-height: 17px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-created_at .right {\n              float: right;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-estimate_time {\n            line-height: 17px;\n            margin-bottom: 2px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-estimate_time .right {\n              float: right;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-product_from {\n            line-height: 17px;\n}\n.rebate-order .order-scroll ._v-content .orderLists .order-item .desc .order-info .order-product_from .right {\n              float: right;\n}\n"],sourceRoot:""}])},597:function(n,t,e){t=n.exports=e(360)(),t.push([n.i,'/* thin border */\n.complain {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n.complain .complain-scroll {\n    padding: 19px 16px 70px;\n}\n.complain ._v-content {\n    padding-bottom: 70px;\n}\n.complain .tips {\n    width: 343px;\n    height: 40px;\n    line-height: 40px;\n    background: #FFF8EE;\n    text-align: center;\n    margin-bottom: 30px;\n}\n.complain .tips span {\n      font-size: 12px;\n      color: #3A3A3A;\n      line-height: 17px;\n}\n.complain .tips span span {\n        color: #FB800C;\n}\n.complain .complain-list {\n    margin-bottom: 50px;\n}\n.complain .complain-item .date {\n    font-size: 20px;\n    color: #DDDDDD;\n    margin-bottom: 16px;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.complain .complain-item .info {\n    height: 45px;\n    margin-bottom: 30px;\n}\n.complain .complain-item .info .order-sn {\n      margin-bottom: 8px;\n      font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n      font-weight: 400;\n}\n.complain .complain-item .info .order-sn span {\n        font-size: 14px;\n        color: #3A3A3A;\n}\n.complain .complain-item .info .order-sn span:nth-child(2) {\n        float: right;\n}\n.complain .complain-item .info .order-sn .c4a9 {\n        color: #4A90E2;\n}\n.complain .complain-item .info .order-sn .c3a3 {\n        color: #3A3A3A;\n}\n.complain .complain-item .info .order-sn .cef4 {\n        color: #EF4F2A;\n}\n.complain .complain-item .estimate-time span {\n    font-size: 12px;\n    color: #B5B5B5;\n}\n.complain .complain-item .estimate-time span:nth-child(2) {\n    float: right;\n}\n',"",{version:3,sources:["/Users/wumin/diablo/src/components/rebate/orderlist/Complain.vue"],names:[],mappings:"AAAA,iBAAiB;AACjB;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,eAAe;CAChB;AACD;IACI,wBAAwB;CAC3B;AACD;IACI,qBAAqB;CACxB;AACD;IACI,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;CACvB;AACD;MACM,gBAAgB;MAChB,eAAe;MACf,kBAAkB;CACvB;AACD;QACQ,eAAe;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,eAAe;IACf,oBAAoB;IACpB,uGAAuG;IACvG,iBAAiB;CACpB;AACD;IACI,aAAa;IACb,oBAAoB;CACvB;AACD;MACM,mBAAmB;MACnB,uGAAuG;MACvG,iBAAiB;CACtB;AACD;QACQ,gBAAgB;QAChB,eAAe;CACtB;AACD;QACQ,aAAa;CACpB;AACD;QACQ,eAAe;CACtB;AACD;QACQ,eAAe;CACtB;AACD;QACQ,eAAe;CACtB;AACD;IACI,gBAAgB;IAChB,eAAe;CAClB;AACD;IACI,aAAa;CAChB",file:"Complain.vue",sourcesContent:['/* thin border */\n.complain {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n.complain .complain-scroll {\n    padding: 19px 16px 70px;\n}\n.complain ._v-content {\n    padding-bottom: 70px;\n}\n.complain .tips {\n    width: 343px;\n    height: 40px;\n    line-height: 40px;\n    background: #FFF8EE;\n    text-align: center;\n    margin-bottom: 30px;\n}\n.complain .tips span {\n      font-size: 12px;\n      color: #3A3A3A;\n      line-height: 17px;\n}\n.complain .tips span span {\n        color: #FB800C;\n}\n.complain .complain-list {\n    margin-bottom: 50px;\n}\n.complain .complain-item .date {\n    font-size: 20px;\n    color: #DDDDDD;\n    margin-bottom: 16px;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.complain .complain-item .info {\n    height: 45px;\n    margin-bottom: 30px;\n}\n.complain .complain-item .info .order-sn {\n      margin-bottom: 8px;\n      font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n      font-weight: 400;\n}\n.complain .complain-item .info .order-sn span {\n        font-size: 14px;\n        color: #3A3A3A;\n}\n.complain .complain-item .info .order-sn span:nth-child(2) {\n        float: right;\n}\n.complain .complain-item .info .order-sn .c4a9 {\n        color: #4A90E2;\n}\n.complain .complain-item .info .order-sn .c3a3 {\n        color: #3A3A3A;\n}\n.complain .complain-item .info .order-sn .cef4 {\n        color: #EF4F2A;\n}\n.complain .complain-item .estimate-time span {\n    font-size: 12px;\n    color: #B5B5B5;\n}\n.complain .complain-item .estimate-time span:nth-child(2) {\n    float: right;\n}\n'],sourceRoot:""}])},622:function(n,t,e){t=n.exports=e(360)(),t.push([n.i,"\n.page-content[data-v-ba9e980e] {\n  padding-top: 50px;\n  background-color: #fff;\n}\n.page-content .tst[data-v-ba9e980e] {\n    position: fixed;\n    z-index: 55;\n}\n.page-content .tips[data-v-ba9e980e] {\n    position: absolute;\n    top: 116px;\n    left: 50%;\n    margin-left: -171px;\n    width: 343px;\n    height: 50px;\n    line-height: 50px;\n    background: #FFF8EE;\n    text-align: center;\n    z-index: 55;\n}\n.page-content .tips span[data-v-ba9e980e] {\n      font-size: 12px;\n      color: #3A3A3A;\n      line-height: 17px;\n}\n.page-content .tips .cffa[data-v-ba9e980e] {\n      color: #FFA70F;\n      font-size: 12px;\n      /* text-decoration: underline; */\n      padding: 12px 0;\n}\n.page-content .tips .btn-import-order[data-v-ba9e980e] {\n      display: inline-block;\n      width: 80px;\n      height: 30px;\n      margin-left: 12px;\n      line-height: 30px;\n      border-radius: 2px;\n      background-color: #ffa70f;\n      color: #fff;\n}\n","",{version:3,sources:["/Users/wumin/diablo/src/components/rebate/orderlist/Index.vue"],names:[],mappings:";AACA;EACE,kBAAkB;EAClB,uBAAuB;CACxB;AACD;IACI,gBAAgB;IAChB,YAAY;CACf;AACD;IACI,mBAAmB;IACnB,WAAW;IACX,UAAU;IACV,oBAAoB;IACpB,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;CACf;AACD;MACM,gBAAgB;MAChB,eAAe;MACf,kBAAkB;CACvB;AACD;MACM,eAAe;MACf,gBAAgB;MAChB,iCAAiC;MACjC,gBAAgB;CACrB;AACD;MACM,sBAAsB;MACtB,YAAY;MACZ,aAAa;MACb,kBAAkB;MAClB,kBAAkB;MAClB,mBAAmB;MACnB,0BAA0B;MAC1B,YAAY;CACjB",file:"Index.vue",sourcesContent:["\n.page-content[data-v-ba9e980e] {\n  padding-top: 50px;\n  background-color: #fff;\n}\n.page-content .tst[data-v-ba9e980e] {\n    position: fixed;\n    z-index: 55;\n}\n.page-content .tips[data-v-ba9e980e] {\n    position: absolute;\n    top: 116px;\n    left: 50%;\n    margin-left: -171px;\n    width: 343px;\n    height: 50px;\n    line-height: 50px;\n    background: #FFF8EE;\n    text-align: center;\n    z-index: 55;\n}\n.page-content .tips span[data-v-ba9e980e] {\n      font-size: 12px;\n      color: #3A3A3A;\n      line-height: 17px;\n}\n.page-content .tips .cffa[data-v-ba9e980e] {\n      color: #FFA70F;\n      font-size: 12px;\n      /* text-decoration: underline; */\n      padding: 12px 0;\n}\n.page-content .tips .btn-import-order[data-v-ba9e980e] {\n      display: inline-block;\n      width: 80px;\n      height: 30px;\n      margin-left: 12px;\n      line-height: 30px;\n      border-radius: 2px;\n      background-color: #ffa70f;\n      color: #fff;\n}\n"],sourceRoot:""}])},663:function(n,t,e){var r=e(583);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e(361)("0ba54e6d",r,!0)},675:function(n,t,e){var r=e(595);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e(361)("6267b7f4",r,!0)},677:function(n,t,e){var r=e(597);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e(361)("476c7c99",r,!0)},702:function(n,t,e){var r=e(622);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e(361)("54f76cbb",r,!0)},739:function(n,t,e){e(677);var r=e(0)(e(519),e(792),null,null);n.exports=r.exports},740:function(n,t,e){e(675);var r=e(0)(e(521),e(790),null,null);n.exports=r.exports},741:function(n,t,e){e(663);var r=e(0)(e(522),e(774),"data-v-34eb2046",null);n.exports=r.exports},774:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"layout",style:{backgroundColor:n.bgColor}},[e("div",{staticClass:"credit-bar bar-subheade"},[e("div",{staticClass:"button-bar",style:{minWidth:n.barWidth+"px"}},n._l(n.links,function(t,r){return e("router-link",{key:r,staticClass:"button font-regular",attrs:{to:t.to},nativeOn:{click:function(t){n.onClick(r)}}},[e("span",{staticClass:"label-container",class:{numbered:n.numbered}},[e("span",{staticClass:"number"},[e("span",{domProps:{textContent:n._s(r+1)}})]),n._v(" "),e("span",{domProps:{textContent:n._s(t.text)}})]),n._v(" "),3===r&&n.hasNew?e("i",{staticClass:"red-dot"}):n._e()])}))]),n._v(" "),"false"==n.useContentSlot?e("router-view"):n._e(),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},790:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"rebate-order"},[e("scroller",{staticClass:"no-orderlist-scroller"},[0==n.lists.length?e("img",{staticClass:"no-orderlist",attrs:{src:"//qianka.b0.upaiyun.com/images/54f41fdd65734161a0212cebe24fa35d.png",alt:""}}):n._e()]),n._v(" "),n.lists.length>0?e("scroller",{ref:"scroller",staticClass:"order-scroll",attrs:{height:"100%",onInfinite:n.infinite,noDataText:"没有 更多数据"}},[n.showTips?e("div",{staticClass:"tips"},[e("span",{staticClass:"font-regular"},[n._v("订单将在确认收货后1小时内显示，超时请 "),e("label",{staticClass:"cffa",on:{touchend:function(t){n.fowardToComplain()}}},[n._v("导入订单")])])]):n._e(),n._v(" "),n._l(n.lists,function(t,r){return e("div",{key:r,staticClass:"orderLists"},[e("div",{staticClass:"order-item"},[e("div",{staticClass:"date"},[n._v(n._s(t.date))]),n._v(" "),n._l(t.orders,function(t,r){return e("div",{key:t.order_sn,staticClass:"desc"},[e("div",{staticClass:"title",staticStyle:{"-webkit-box-orient":"vertical"}},[n._v(n._s(t.item_title))]),n._v(" "),e("div",{staticClass:"price-numbers"},[e("div",{staticClass:"price"},[e("span",{staticClass:"font-10"},[n._v("￥")]),n._v(n._s(parseFloat(t.pay_price/t.item_num).toFixed(2)))]),n._v(" "),e("div",{staticClass:"numbers"},[n._v("x"+n._s(t.item_num))])]),n._v(" "),e("div",{staticClass:"commission"},[n.showPlus?e("span",{staticClass:"plus"},[n._v("+")]):n._e(),e("span",{staticClass:"font-20"},[n._v(n._s(t.commission))]),e("span",[n._v(" 集分宝")]),n._v(" "),e("div",{staticClass:"type"},[0===t.order_status?e("span",{staticClass:"daifan"},[n._v("预计"+n._s(n.format(t.estimate_time))+"到账")]):1===t.order_status?e("span",[n._v("已返利")]):e("span",[n._v("已退货")])])]),n._v(" "),e("div",{staticClass:"order-info"},[e("div",{staticClass:"order-num"},[n._v("订单号 "),e("div",{staticClass:"right"},[n._v(n._s(t.order_sn))])]),n._v(" "),e("div",{staticClass:"order-created_at"},[n._v("跟单时间 "),e("div",{staticClass:"right"},[n._v(n._s(t.created_at))])])])])})],2)])})],2):n._e()],1)},staticRenderFns:[]}},792:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"complain"},[e("scroller",{staticClass:"complain-scroll",attrs:{height:"100%"}},[e("div",{staticClass:"tips"},[e("span",{staticClass:"font-regular"},[n._v("比对成功的订单将自动添加到 "),e("span",[n._v("待返利")]),n._v(" 中")])]),n._v(" "),n._l(n.lists,function(t,r){return n.lists.length>0?e("div",{staticClass:"complain-list",attrs:{id:r}},[e("div",{staticClass:"complain-item"},[e("div",{staticClass:"date"},[n._v(n._s(t.date))]),n._v(" "),n._l(t.orders,function(t,r){return e("div",{key:t.order_sn,staticClass:"info clearfix"},[e("div",{staticClass:"order-sn"},[e("span",[n._v("订单号 "+n._s(t.order_sn))]),n._v(" "),e("span",{class:0===t.check_status?"c4a9":1===t.check_status?"c3a3":"cef4"},[n._v(n._s(0===t.check_status?"等待比对":1===t.check_status?"比对成功":"比对失败"))])]),n._v(" "),0==t.check_status?e("div",{staticClass:"estimate-time"},[e("span",[n._v("预计处理时间")]),e("span",[n._v(n._s(t.estimate_time)+"前")])]):n._e(),n._v(" "),0!==t.check_status?e("div",{staticClass:"estimate-time"},[e("span",[n._v("处理完成时间")]),e("span",[n._v(n._s(t.check_day))])]):n._e()])})],2)]):n._e()})],2)],1)},staticRenderFns:[]}},819:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"nav",rawName:"v-nav",value:{hideNavbar:!0},expression:"{hideNavbar: true}"}],staticClass:"page"},[e("AnimateHeader",{attrs:{"bg-color":"#FFA70F","menu-bg-color":"#FB940C",color:"#FFFFFF",title:"我的订单","show-back-button":!0,"on-back-button-click":n.back,animate:!1}}),n._v(" "),e("div",{staticClass:"page-content"},[e("tab-layout",{attrs:{links:n.tabLinks,"bar-width":n.barWidth,"bg-color":"#FFF","on-tab-click":n.onTabClick,"use-content-slot":"true","has-new":n.shensuHasNew}}),n._v(" "),0==n.activeIndex&&0==n.daifanLists.length?e("div",{staticClass:"tips"},[n._m(0),n._v(" "),e("label",{staticClass:"btn-import-order",on:{click:function(t){n.fowardToComplain()}}},[n._v("导入订单")])]):n._e(),n._v(" "),n.loaded&&0==n.activeIndex?e("list",{staticClass:"infiniteDaifan",attrs:{lists:n.daifanLists,infinite:n.infiniteDaifan,showTips:!0,showPlus:!1}}):n._e(),n._v(" "),n.loaded&&1==n.activeIndex?e("list",{staticClass:"infiniteYifan",attrs:{lists:n.yifanLists,infinite:n.infiniteYifan}}):n._e(),n._v(" "),n.loaded&&2==n.activeIndex?e("list",{staticClass:"infiniteYitui",attrs:{lists:n.yituiLists,infinite:n.infiniteYitui}}):n._e(),n._v(" "),3==n.activeIndex?e("Complain",{attrs:{lists:n.appealLists,"on-tab-click":n.onTabClick}}):n._e()],1)],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{staticClass:"font-regular"},[n._v("去淘宝 "),e("label",{staticClass:"cffa"},[n._v("确认收货后")]),n._v(" 记得导入订单哟！")])}]}}});
//# sourceMappingURL=rebate-orderlist.985067aa2b5051692e47.js.map