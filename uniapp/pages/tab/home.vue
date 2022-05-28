<template>
	<view>
		<view class="">
			<image class="head" src="/static/image/homegif.gif" mode=""></image>
		</view>
		<view class="page_box mb12">
			<button class="bf_input_down pad" open-type="share" form-type="submit">
				<image class="bf_input_down" src="/static/image/fx.png" mode=""></image>
			</button>
			<!-- #ifdef MP-WEIXIN || MP-QQ  -->
			<view v-if="bannerid">
				<ad :unit-id="bannerid" ></ad>
			</view>
			<!-- #endif -->
			<view class="inputmain">
				<view class="weui-cells" style="width:520rpx;">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__bd" style="height: 86rpx;">
							<u-input class="weui-input" v-model="value" :type="type" :border="border" :height="86" />
						</view>
					</view>
				</view>
				<view class="jiexibut" @tap="query">解析</view>
			</view>

			<view class="mb12" v-if="status">
				<video class="mp4" :src="mp4url" controls></video>
				<view class="x-bc pad">
					<u-button type="warning" shape="circle" @click="guankanjili">
						<u-icon name="download"></u-icon>保存本地
					</u-button>
					<u-button type="warning" shape="circle" @click="copydownurl">
						<u-icon name="attach"></u-icon>复制链接
					</u-button>
				</view>
			</view>


			<view>
				<image @tap="onClick('../recommend/help')" class="banner" src="/static/image/zuoyi.png"></image>
				<image @tap="onClick('../recommend/share')" class="banner" src="/static/image/youyi.png"></image>
				<image @tap="onClick('../recommend/faq')" class="banner" src="/static/image/zuoer.png"></image>
				<image @tap="onClick('../recommend/md5faq')" class="banner" src="/static/image/youer.png"></image>
			</view>

			<image class="jiaocheng" src="/static/image/jiexi4.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	import util from '../../utils/util.js';
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				border: true,
				status:false,
				progress:0,
				mp4url: '',
				bannerid:   uni.getStorageSync('bannerid'),
				vidlkklkhjg:null
			}
		},
		onLoad() {
			
		},
		methods: {
			
		
			
			setInputValue(url) {
				this.value = url;
			},
			query() {
				  uni.showLoading({
				    title: '正在解析',
				    mask: true
				  })
				var _this = this;
				_this.status = false;
				
				uni.login({
					success:function(reddg){
					var jscode =	reddg.code;
					
					_this._get('', {
						url: util.handleUrl(_this.value),
						js_code:jscode
					}, function(result) {
						
						// console.log(result);
						
						// if (!result.status) {
						// 	_this.mp4url = false
						// 	return _this.showError(result.data)
						// }
						// console.log( encodeURI(result.videourl));
						// _this.mp4url = encodeURI(result.videourl)
						// _this.status = true
					
					});
					
					}
				})
				
				
				
			},
			onClick(url) {
				if (url) {
					uni.navigateTo({
						url: url
					})
				}
			},
			copydownurl: function() {
				var t = this;
				uni.setClipboardData({
					data: t.mp4url,
					success: function(t) {
						uni.showToast({
							title: "复制成功",
							icon: "success",
							duration: 800
						}), setTimeout(function() {
							uni.hideToast({});
						}, 800);
					}
				});
			},
			
			guankanjili: function(){
				  var that= this;
				  if (uni.createRewardedVideoAd && that.vidlkklkhjg==null) {
				  	that.vidlkklkhjg = uni.createRewardedVideoAd({
				  		adUnitId:  wx.getStorageSync('jiliAdid')
				  	})
				  	that.vidlkklkhjg.onLoad(() => {})
				  	that.vidlkklkhjg.onClose((res) => {
				  		if (res && res.isEnded) {
				  			that.downloads();
				  		} else {
				  			uni.showToast({
				  				icon: 'none',
				  				title: "保存失败，中途关闭广告！"
				  			})
				  		}
				  	})
				  	that.vidlkklkhjg.onError((err) => {
				  		// uni.showToast({
				  		// 	icon: 'none',
				  		// 	title: "暂时无广告，请稍后再试"
				  		// })
				  	})
				  }
				  
				  
				  uni.showModal({
				  	title: '提示',
				  	content: '观看广告，才能解锁下载',
				  	success: function (res) {
				  		if (res.confirm) {
				  			if (that.vidlkklkhjg) {
				  				that.vidlkklkhjg.show().catch(() => {
				  					that.vidlkklkhjg.load()
				  						.then(() => that.vidlkklkhjg.show())
				  						.catch(err => {
				  							console.log('激励视频 广告显示失败')
				  							that.downloads();
				  						})
				  				})
				  			} else {
				  				that.downloads();
				  			}
				  		} else if (res.cancel) {
				  			console.log('用户点击取消');
				  		}
				  	}
				  });
				  
				  
				  
				 
				  
				  
				
			},
			downloads: function() {
				var t = this;
				t.progress = 0;
				
				
				 var that = this;
				      wx.authorize({
				        scope: 'scope.writePhotosAlbum',
				        success() {
				         
				          that.setData({
				            modalName: "downloadProcessModal"
				          });
						  
						
				
				
				uni.showToast({
					title: "开始下载！",
					icon: "loading",
					duration: 1e3
				}), uni.downloadFile({
					url: t.downloadvideo + encodeURIComponent(t.mp4url),
					success: function(a) {
						200 === a.statusCode && (uni.hideToast({}), uni.saveVideoToPhotosAlbum({
							filePath: a.tempFilePath,
							success: function(a) {
								uni.showModal({
									title: "下载成功",
									content: "请在系统相册中查看！",
									confirmColor: "#ff9900",
									showCancel: !1,
									success: function(t) {}
								});
							}
						}));
					},
					fail: function(a) {
						console.log(a);
						uni.hideToast({}), uni.showModal({
							title: "下载失败",
							content: "失败",
							confirmColor: "#ff9900",
							showCancel: !1,
							success: function(a) {
								t.setData({});
							}
						});
					}
				}).onProgressUpdate(function(a) {
					console.log(a);
					"1" === t.progress ? uni.showToast({
						title: String(a.progress) + "%",
						icon: "loading",
						duration: 8e4
					}) : uni.showToast({
						title: "下载中...",
						icon: "loading",
						duration: 8e4
					});
				})
				
				
				}
				})
			},
			// 模拟继承get请求的方法
			_get(url, data, success, fail, complete, check_login) {
				let App = this;
				// 构造请求参数
				data = data || {};
               
				// 构造get请求
				let request = function() {
					uni.request({
						url: App.watermarkUrl,
						header: {
							'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
						},
						method:"post",
						data: data,
						success: function(res) {
							
							
							var datatemp = JSON.parse(res.data)
							console.log(datatemp);
							if (datatemp.code !== '200' ) {
								App.showError('解析失败');
								
								App.status = false;
							}else{
								
								
								
								App.mp4url = datatemp.data.url;
								App.status = true;
								
							}
							
						},
						fail: function(res) {
						
							App.status = false;
							
							
						},
						complete: function(res) {
							uni.hideNavigationBarLoading();
							complete && complete(res);
						},
					});
				};
				
				 uni.hideLoading();
				// 判断是否需要验证登录
				request();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.head {
		width: 100%;
		height: 400px;
	}

	.bf_input_down {
		width: 100%;
		height: 166rpx;
		background-color: #fff;
		background-size: 103% 100%;
		padding-left: 0;
		padding-right: 0;
	}

	.inputmain {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 15px 0;
		border: none;

		.weui-cells {
			position: relative;
			background-color: #f3f3f3;
			line-height: 1.41176471;
			font-size: 14px;

			.weui-cell {

				.weui-cell__bd {
					flex: 1;

					.weui-input {
						height: 43px;
						min-height: 43px;
						line-height: 43px;
						font-family: "iconfont" !important;
					}
				}
			}

			.weui-cell_input {
				padding-top: 0;
				padding-bottom: 0;
			}
		}
	}

	.jiexibut {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 145rpx;
		height: 86rpx;
		background: linear-gradient(#ffd800, #ffbb00);
		color: #563f00;
		font-size: 36rpx;
		border-top-right-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
		border: none;
	}

	.banner {
		position: relative;
		float: left;
		padding: 5px 0px;
		width: 50%;
		height: 170rpx;
		box-sizing: border-box;
		border-right: 0rpx solid #D9D9D9;
		border-bottom: 0rpx solid #D9D9D9;
	}

	.jiaocheng {
		margin-left: 45rpx;
		margin-bottom: 10rpx;
		margin-right: 45px;
		display: block;
		width: 100%;
		height: 800rpx;
		background-size: 100% 100%;
		margin: 10px auto;
		line-height: 36px;
		text-align: center;
		font-size: 18px;
	}

	.mp4 {
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
	}
</style>
