webpackJsonp([27],{373:function(n,e,t){t(625);var o=t(0)(t(499),t(733),"data-v-13a794b8",null);n.exports=o.exports},413:function(n,e,t){t(434);var o={options:{effect:"scale",cssClass:"rebate-complain-success",buttons:[{text:"知道了"}]},template:function(n){return'\n      <img class="logo" src="//qianka.b0.upaiyun.com/images/9cdaf2bf12e15cb12d674afd13340d7b.png" alt="">\n      <div class="title">导入订单成功</div>\n      <div class="desc">返利订单 <span style="color: #3A3A3A;font-family: PingFangSC-Regular;">'+n.orderSN+'</span> 导入成功，集分宝 <span style="color:#ea5a49;">'+n.score+"</span>个 已经补发至您的账户</div>\n    "}},a={options:{effect:"scale",cssClass:"rebate-complain-fail",buttons:[{text:"知道了"}]},template:function(n){return'\n      <img class="logo" src="//qianka.b0.upaiyun.com/images/41b54334fb45773cd7fa55e2d9ff7682.png" alt="">\n      <div class="title">导入订单失败</div>\n      <div class="desc">返利订单 <span style="color: #3A3A3A;font-family: PingFangSC-Regular;">'+n.orderSN+"</span> 返利导入订单失败，理由：提交资料不足证明完成本任务</div>\n    "}},i={options:{effect:"scale",cssClass:"rebate-jump-to-taobao"},template:function(n,e){return'\n      <img class="logo" src="//qianka.b0.upaiyun.com/images/7123f087f11b66449c47b2214516eb2e.png" alt="">\n      <div class="desc">正在跳转淘宝官网（<span id="countDowm">'+n+'</span>s）</div>\n      <div class="remind">'+e+"</div>\n    "}},p={options:{effect:"scale",cssClass:"open_rebate_entrance",showClose:!0,buttons:[{text:"我要返利"}]},template:function(){return'\n      <div class="title">钱咖新玩法，<span>淘宝返利</span></div>\n      <div class="title">淘宝天猫买就返，<span>最高36%</span></div>\n      <div class="pic"><img src="//qianka.b0.upaiyun.com/images/f3182a4934fed9b8280e6fe61f84164c.png"></div>\n    '}},A={options:{effect:"scale",cssClass:"popup-general rebate_submit_apply_success",buttons:[{text:"返回"},{text:"立即查看"}]},template:function(){return'\n    <div class="title">提交成功</div>\n    <div class="desc">\n      订单比对将在3个工作日内处理完毕\n    </div>\n  '}};n.exports={rebate_complain_success:o,rebate_complain_fail:a,rebate_jump_to_taobao:i,open_rebate_entrance:p,rebate_submit_apply_success:A}},426:function(n,e,t){e=n.exports=t(346)(),e.push([n.i,"/* empty */\n.rebate-complain-success, .rebate-complain-fail {\n  text-align: center; }\n  .rebate-complain-success .popup-body, .rebate-complain-fail .popup-body {\n    padding: 30px 16px !important; }\n    .rebate-complain-success .popup-body .logo, .rebate-complain-fail .popup-body .logo {\n      vertical-align: middle;\n      width: 32px;\n      height: 36px;\n      margin-bottom: 20px; }\n    .rebate-complain-success .popup-body .title, .rebate-complain-fail .popup-body .title {\n      font-family: PingFangSC-Regular;\n      font-size: 16px;\n      line-height: 22px;\n      color: #484746;\n      margin-bottom: 10px; }\n    .rebate-complain-success .popup-body .desc, .rebate-complain-fail .popup-body .desc {\n      font-family: PingFangSC-Light;\n      font-size: 14px;\n      color: #888888; }\n\n.rebate-jump-to-taobao {\n  text-align: center; }\n  .rebate-jump-to-taobao.popup {\n    width: 240px; }\n  .rebate-jump-to-taobao .popup-body {\n    padding: 30px 5px !important; }\n    .rebate-jump-to-taobao .popup-body .logo {\n      margin-top: 4px;\n      vertical-align: middle;\n      width: 68px;\n      height: 28px;\n      margin-bottom: 20px; }\n    .rebate-jump-to-taobao .popup-body .desc {\n      font-family: PingFangSC-Regular;\n      font-size: 13px;\n      color: #3A3A3A;\n      line-height: 18px;\n      margin-bottom: 12px; }\n    .rebate-jump-to-taobao .popup-body .remind {\n      font-family: PingFangSC-Regular;\n      font-size: 12px;\n      color: #B5B5B5;\n      margin: 0; }\n\n.open_rebate_entrance {\n  height: 381px; }\n  .open_rebate_entrance .title {\n    text-align: center;\n    height: 22px;\n    line-height: 22px;\n    font-family: PingFangSC-Regular;\n    font-size: 16px;\n    color: #3A3A3A; }\n    .open_rebate_entrance .title span {\n      color: #ffa70f; }\n  .open_rebate_entrance .pic {\n    margin-top: 25px;\n    text-align: center; }\n    .open_rebate_entrance .pic img {\n      width: 219px;\n      height: 174px; }\n  .open_rebate_entrance .hairline-bottom::after {\n    visibility: hidden; }\n  .open_rebate_entrance .popup-buttons {\n    margin-left: 58px;\n    width: 160px; }\n    .open_rebate_entrance .popup-buttons .button {\n      width: 50px;\n      min-height: 40px;\n      height: 40px;\n      background-color: #FFA70F !important;\n      border-radius: 2px; }\n      .open_rebate_entrance .popup-buttons .button span {\n        font-family: PingFangSC-Regular;\n        font-size: 13px;\n        color: #FFFFFF; }\n\n.rebate_submit_apply_success .button {\n  font-family: PingFangSC-Medium; }\n","",{version:3,sources:["/Users/wumin/diablo/src/components/rebate/popups.scss"],names:[],mappings:"AAAA,WAAW;AACX;EACE,mBAAkB,EA0BnB;EA3BD;IAII,8BAA6B,EAsB9B;IA1BH;MAOM,uBAAsB;MACtB,YAAW;MACX,aAAY;MACZ,oBAAmB,EACpB;IAXL;MAcM,gCAA+B;MAC/B,gBAAe;MACf,kBAAiB;MACjB,eAAc;MACd,oBAAmB,EACpB;IAnBL;MAsBM,8BAA6B;MAC7B,gBAAe;MACf,eAAc,EACf;;AAIL;EACE,mBAAkB,EAgCnB;EAjCD;IAII,aAAY,EACb;EALH;IAQI,6BAA4B,EAwB7B;IAhCH;MAWM,gBAAe;MACf,uBAAsB;MACtB,YAAW;MACX,aAAY;MACZ,oBAAmB,EACpB;IAhBL;MAmBM,gCAA+B;MAC/B,gBAAe;MACf,eAAc;MACd,kBAAiB;MACjB,oBAAmB,EACpB;IAxBL;MA2BM,gCAA+B;MAC/B,gBAAe;MACf,eAAc;MACd,UAAS,EACV;;AAIL;EACE,cAAa,EA+Cd;EAhDD;IAII,mBAAkB;IAClB,aAAY;IACZ,kBAAiB;IACjB,gCAA+B;IAC/B,gBAAe;IACf,eAAc,EAKf;IAdH;MAYM,eAAc,EACf;EAbL;IAiBI,iBAAgB;IAChB,mBAAkB,EAMnB;IAxBH;MAqBM,aAAY;MACZ,cAAa,EACd;EAvBL;IA2BI,mBAAkB,EACnB;EA5BH;IA+BI,kBAAiB;IACjB,aAAY,EAeb;IA/CH;MAmCM,YAAW;MACX,iBAAgB;MAChB,aAAY;MACZ,qCAAoC;MACpC,mBAAkB,EAOnB;MA9CL;QA0CQ,gCAA+B;QAC/B,gBAAe;QACf,eAAc,EACf;;AAKP;EAEI,+BAA8B,EAC/B",file:"popups.scss",sourcesContent:["/* empty */\n.rebate-complain-success, .rebate-complain-fail {\n  text-align: center;\n\n  .popup-body {\n    padding: 30px 16px !important;\n\n    .logo {\n      vertical-align: middle;\n      width: 32px;\n      height: 36px;\n      margin-bottom: 20px;\n    }\n\n    .title {\n      font-family: PingFangSC-Regular;\n      font-size: 16px;\n      line-height: 22px;\n      color: #484746;\n      margin-bottom: 10px;\n    }\n\n    .desc {\n      font-family: PingFangSC-Light;\n      font-size: 14px;\n      color: #888888;\n    }\n  }\n}\n\n.rebate-jump-to-taobao {\n  text-align: center;\n\n  &.popup {\n    width: 240px;\n  }\n\n  .popup-body {\n    padding: 30px 5px !important;\n\n    .logo {\n      margin-top: 4px;\n      vertical-align: middle;\n      width: 68px;\n      height: 28px;\n      margin-bottom: 20px;\n    }\n\n    .desc {\n      font-family: PingFangSC-Regular;\n      font-size: 13px;\n      color: #3A3A3A;\n      line-height: 18px;\n      margin-bottom: 12px;\n    }\n\n    .remind {\n      font-family: PingFangSC-Regular;\n      font-size: 12px;\n      color: #B5B5B5;\n      margin: 0;\n    }\n  }\n}\n\n.open_rebate_entrance {\n  height: 381px;\n\n  .title {\n    text-align: center;\n    height: 22px;\n    line-height: 22px;\n    font-family: PingFangSC-Regular;\n    font-size: 16px;\n    color: #3A3A3A;\n\n    span {\n      color: #ffa70f;\n    }\n  }\n\n  .pic {\n    margin-top: 25px;\n    text-align: center;\n\n    img {\n      width: 219px;\n      height: 174px;\n    }\n  }\n\n  .hairline-bottom::after {\n    visibility: hidden;\n  }\n\n  .popup-buttons {\n    margin-left: 58px;\n    width: 160px;\n\n    .button {\n      width: 50px;\n      min-height: 40px;\n      height: 40px;\n      background-color: #FFA70F !important;\n      border-radius: 2px;\n\n      span {\n        font-family: PingFangSC-Regular;\n        font-size: 13px;\n        color: #FFFFFF;\n      }\n    }\n  }\n}\n\n.rebate_submit_apply_success {\n  .button {\n    font-family: PingFangSC-Medium;\n  }\n}\n"],sourceRoot:""}])},434:function(n,e,t){var o=t(426);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(347)("34091c24",o,!0)},499:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(413),a=(t.n(o),["小贴士：聚划算商品无返利哦","小贴示：虚拟商品无返利哦","小贴士：返利只计算实付款金额哦","小贴士：退货会扣除已发放的返利","小贴士：货到付款的订单无返利哦"]);e.default={mounted:function(){var n=this;this.goodsName=this.$route.params.goodsName,this.keyId=this.$route.params.keyId||"";var e=3,t=Math.floor(Math.random()*a.length),i=$popup.fromTemplate(o.rebate_jump_to_taobao.template(e,a[t]),o.rebate_jump_to_taobao.options);this.countdownTimer=setInterval(function(t){var o=document.querySelector("#countDowm");e--,e<1&&(clearInterval(n.countdownTimer),location.href="/v4/rebate/redirect?keywords="+n.goodsName+"&key_id="+n.keyId,i.hide()),o.innerHTML=e},1e3),i.show()},beforeDestroy:function(){clearInterval(this.countdownTimer)}}},547:function(n,e,t){e=n.exports=t(346)(),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"JumpLoading.vue",sourceRoot:""}])},625:function(n,e,t){var o=t(547);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(347)("5f6af056",o,!0)},733:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("div")},staticRenderFns:[]}}});
//# sourceMappingURL=rebate-jumploading.7843ef125aeb9c8bc3de.js.map