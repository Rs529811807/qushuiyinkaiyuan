<template>
	<view>
		<view class="wrap">
			<swiper class="swiper-box" :current="current" @change="changeswiper" :indicator-dots="false" :duration="300">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<home ref="home"></home>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<recommend ref="recommend"></recommend>
					</scroll-view>
				</swiper-item>
				<!-- <swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<host ref="host"></host>
					</scroll-view>
				</swiper-item> -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<md5 ref="md5"></md5>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<user ref="user"></user>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="list" :mid-button="false" @change="change" active-color="#ffc600" inactive-color="#434343"></u-tabbar>
	</view>
</template>

<script>
	var _this;
	import util from '../../utils/util.js';
	import home from "../tab/home.vue";
	import host from "../tab/host.vue";
	import recommend from "../tab/recommend.vue";
	import md5 from "../tab/md5.vue";
	import user from "../tab/user.vue";
	export default {
		components: {
			home,
			host,
			md5,
			recommend,
			user
		},
		data() {
			return {
				list: [{
						iconPath: "/static/image/index.png",
						selectedIconPath: "/static/image/indexs.png",
						text: '去水印',
					},
					{
						iconPath: "/static/image/new.png",
						selectedIconPath: "/static/image/news.png",
						text: '推荐',
					},
					
					{
						iconPath: "/static/image/md5.png",
						selectedIconPath: "/static/image/md5s.png",
						text: 'MD5',
					},
					{
						iconPath: "/static/image/my.png",
						selectedIconPath: "/static/image/mys.png",
						text: '我的',
					},
				],
				current: 0
			}
		},
		onLoad(e) {
			_this = this;
			
			
			
			
			
		},
		onShow(e) {
			var that = this;
			let InterstitialAd;
			 var App= this;
			
			
		
			
			
			
			
			    wx.request({
			        url: App.guanggaopeizhi,
			        header: {
			          "content-type": "application/json",
			        },
			        method: "get",
			  
			        success: function (woaini) {
			          console.log(woaini.data)
			          wx.setStorageSync('bannerid', woaini.data.bannerid);
					    wx.setStorageSync('interstitialAdId', woaini.data.interstitialAdId);
						  wx.setStorageSync('jiliAdid', woaini.data.jiliAdid);
						    wx.setStorageSync('videoAdid', woaini.data.videoAdid);
							
							App.bannerid = woaini.data.bannerid;
							App.interstitialAdId = woaini.data.interstitialAdId;
							App.jiliAdid = woaini.data.jiliAdid;
							App.videoAdid = woaini.data.videoAdid;
							
							
							
							
							
							if (uni.createInterstitialAd) {
								console.log("插屏来了....");
								InterstitialAd = uni.createInterstitialAd({
									adUnitId:  woaini.data.interstitialAdId
								})
								InterstitialAd.onLoad(() => {})
								InterstitialAd.offClose();
								InterstitialAd.offError();
								InterstitialAd.onError((err) => {})
								InterstitialAd.onClose(() => {})
							}
							if (InterstitialAd) {
								setInterval(() => {
									InterstitialAd.show().catch((err) => {
										console.error(err)
									})
								}, 60000)
							}
							
							
							
							
							
							
			        }, fail: function (n) {
			          
			        }
			      })
			
			
			
			
			// #ifdef H5
			return;
			// #endif
			
			var a = this;
			// uni.getClipboardData({
			// 	success: function(t) {
			// 		var n = util.handleUrl(t.data);
			// 		if (n) {
			// 			var i = n.substring(0, 30);
			// 			uni.showModal({
			// 				title: "检测到素材链接，是否粘贴？",
			// 				content: i.length >= 30 ? i + "..." : n,
			// 				showCancel: !0,
			// 				cancelText: "取消",
			// 				cancelColor: "#ff9900",
			// 				confirmText: "粘贴",
			// 				confirmColor: "#ff9900",
			// 				success: function(t) {
			// 					_this.$refs.home.setInputValue(n);
			// 				},
			// 				fail: function(t) {},
			// 				complete: function(t) {}
			// 			});
			// 		}
			// 	},
			// 	fail: function(t) {},
			// 	complete: function(t) {}
			// })
			// util
		},
		methods: {
			changeswiper(e) {
				uni.setNavigationBarTitle({
					title: this.list[e.detail.current].text
				});
				this.current = e.detail.current;
			},
			change(e) {
				this.current = e;
			},
			/**
			 * 分享当前页面
			 */
			onShareAppMessage: function() {
				return {
					title: '我发现了一个超好用的去水印工具',
					path: "/pages/index/index"
				};
			},
		}
	}
</script>


<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #fff;
	}

	/* #endif */
</style>

<style lang="scss" scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}
</style>
