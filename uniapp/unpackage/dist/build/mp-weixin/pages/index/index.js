(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"010c":function(t,e,n){"use strict";var i=n("ab26"),a=n.n(i);a.a},"0d59":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uTabbar:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabbar/u-tabbar")]).then(n.bind(null,"a1c6"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"20f5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("d4d8"));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(){n.e("pages/tab/home").then(function(){return resolve(n("9936"))}.bind(null,n)).catch(n.oe)},o=function(){n.e("pages/tab/host").then(function(){return resolve(n("e5d6"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("pages/tab/recommend").then(function(){return resolve(n("1c07"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("pages/tab/md5").then(function(){return resolve(n("c924"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("pages/tab/user").then(function(){return resolve(n("eeaa"))}.bind(null,n)).catch(n.oe)},u={components:{home:a,host:o,md5:r,recommend:c,user:d},data:function(){return{list:[{iconPath:"/static/image/index.png",selectedIconPath:"/static/image/indexs.png",text:"去水印"},{iconPath:"/static/image/new.png",selectedIconPath:"/static/image/news.png",text:"推荐"},{iconPath:"/static/image/md5.png",selectedIconPath:"/static/image/md5s.png",text:"MD5"},{iconPath:"/static/image/my.png",selectedIconPath:"/static/image/mys.png",text:"我的"}],current:0}},onLoad:function(t){this},onShow:function(e){var n,i=this;wx.request({url:i.guanggaopeizhi,header:{"content-type":"application/json"},method:"get",success:function(e){console.log(e.data),wx.setStorageSync("bannerid",e.data.bannerid),wx.setStorageSync("interstitialAdId",e.data.interstitialAdId),wx.setStorageSync("jiliAdid",e.data.jiliAdid),wx.setStorageSync("videoAdid",e.data.videoAdid),i.bannerid=e.data.bannerid,i.interstitialAdId=e.data.interstitialAdId,i.jiliAdid=e.data.jiliAdid,i.videoAdid=e.data.videoAdid,t.createInterstitialAd&&(console.log("插屏来了...."),n=t.createInterstitialAd({adUnitId:e.data.interstitialAdId}),n.onLoad((function(){})),n.offClose(),n.offError(),n.onError((function(t){})),n.onClose((function(){}))),n&&setInterval((function(){n.show().catch((function(t){console.error(t)}))}),6e4)},fail:function(t){}})},methods:{changeswiper:function(e){t.setNavigationBarTitle({title:this.list[e.detail.current].text}),this.current=e.detail.current},change:function(t){this.current=t},onShareAppMessage:function(){return{title:"我发现了一个超好用的去水印工具",path:"/pages/index/index"}}}};e.default=u}).call(this,n("543d")["default"])},"95eb":function(t,e,n){},ab26:function(t,e,n){},baa8:function(t,e,n){"use strict";var i=n("95eb"),a=n.n(i);a.a},bbe4:function(t,e,n){"use strict";n.r(e);var i=n("20f5"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e12d:function(t,e,n){"use strict";(function(t){n("52a0");i(n("66fd"));var e=i(n("e20e"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},e20e:function(t,e,n){"use strict";n.r(e);var i=n("0d59"),a=n("bbe4");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("baa8"),n("010c");var c,r=n("f0c5"),d=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1d9ab24e",null,!1,i["a"],c);e["default"]=d.exports}},[["e12d","common/runtime","common/vendor"]]]);