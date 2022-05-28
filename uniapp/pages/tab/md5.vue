<template>
	<view class="content">
		<view class="content_t">
			<view class="content_t_x">
				<view class="content_t_x_c" v-if="xiugaistate==1">
					<button @tap="addvideobutton" class="addvideos" plain="true">
						<image class="content_t_x_t_image" src="/static/image/create_btn_picture_add_normal_boy.png"></image>
					</button>
				</view>
				<view class="content_t_x_c" v-if="xiugaistate==2">
					<video id="myVideo" :src="urldata"></video>
				</view>
			</view>
		</view>
		<view class="content_z">
			<view class="content_z_c" v-if="xiugaistate==2">
				<view class="content_z_c_time">
					<span class="content_z_c_text">视频时间: </span>{{durationtime}}</view>
				<view class="content_z_c_size">
					<span class="content_z_c_text">视频大小: </span>{{videosize}}</view>
				<view class="content_z_c_old">
					<span class="content_z_c_text">修改前MD5: </span>{{oldmd5}}</view>
				<view class="content_z_c_new">
					<span class="content_z_c_text">修改后MD5: </span>{{newmd5}}</view>
			</view>
			<view class="content_z_c" v-if="xiugaistate==1">
				<view class="content_z_c_tishi">
					轻松上热门，修改视频MD5
				</view>
			</view>
		</view>
		<view @tap="resetvideo" class="content_reset" v-if="xiugaistate==2">
			清空修改内容
		</view>
		<view class="content_x" v-if="xiugaistate==2">
			<view class="content_x_s">
				<button @tap="savevideo" class="savevideo" plain="true">
					<image class="content_x_l_image" src="/static/image/savevideo.png"></image>
				</button>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN || MP-QQ  -->
		<view v-if="videoAdid">
			<ad :unit-id="videoAdid"  ad-type="video" ad-theme="white"></ad>
		</view>
		<!-- #endif -->
	</view>

</template>

<script>
	import util from '../../utils/util.js';
	export default {
		data() {
			return {
				xiugaistate: 1,
				urldata: '',
				oldmd5: "",
				newmd5: "",
				durationtime: "",
				videosize: "",
				videoAdid:   uni.getStorageSync('videoAdid')
			}
		},
		methods: {
			saveImageToPhotosAlbum() {
				uni.saveImageToPhotosAlbum({
					filePath: this.images,
					success: function() {
						uni.showToast({
							title: "海报已保存到相册",
							icon: "success",
							duration: 2500
						});
					}
				});
			},
			resetvideo() {
				// #ifndef MP-WEIXIN || MP-QQ
				return;
				// #endif
				var e = this;
				uni.getFileSystemManager().unlink({
					filePath: wx.env.USER_DATA_PATH + "/test.mp4",
					success: function(t) {
						"unlink:ok" == t.errMsg && e.setData({
							xiugaistate: 1
						});
					}
				});
			},
			savevideo() {
				// #ifndef MP-WEIXIN || MP-QQ
				return;
				// #endif
				var e = this, t = wx.getFileSystemManager();
				wx.saveVideoToPhotosAlbum({
					filePath: wx.env.USER_DATA_PATH + "/test.mp4",
					success: function(i) {
						"saveVideoToPhotosAlbum:ok" == i.errMsg && t.unlink({
							filePath: wx.env.USER_DATA_PATH + "/test.mp4",
							success: function(t) {
								"unlink:ok" == t.errMsg && e.setData({
									xiugaistate: 1,
									tishitext: "视频保存成功,请到手机相册中查看"
								});
							}
						});
					},
					fail: function(t) {
						"saveVideoToPhotosAlbum:fail auth deny" == t.errMsg ? wx.showModal({
							title: "保存失败",
							content: "你需要设置授权保存到相册",
							cancelText: "不设置",
							confirmText: "去设置",
							success: function(e) {
								e.confirm ? wx.openSetting({
									success: function(e) {}
								}) : e.cancel;
							}
						}) : "saveVideoToPhotosAlbum:fail invalid video" == t.errMsg && e.setData({
							tishitext: "视频保存失败,联系客服修复"
						});
					}
				});
			},
			addvideobutton() {
				// #ifndef MP-WEIXIN || MP-QQ
				return;
				// #endif
				var t = this;
				uni.chooseVideo({
					sourceType: ["album"],
					success: function(res) {
						var n = util.duration(res.duration),
							s = util.kb(res.size),
							o = uni.getFileSystemManager();
						uni.getFileInfo({
							filePath: res.tempFilePath,
							success: function(e) {
								t.setData({
									oldmd5: e.digest,
									durationtime: n,
									videosize: s
								});
							}
						}), o.saveFile({
							tempFilePath: res.tempFilePath,
							filePath: wx.env.USER_DATA_PATH + "/test.mp4",
							success: function(e) {
								console.log(e);
								o.appendFile({
									filePath: wx.env.USER_DATA_PATH + "/test.mp4",
									data: "01",
									success: function(e) {
										uni.getFileInfo({
											filePath: wx.env.USER_DATA_PATH + "/test.mp4",
											success: function(e) {
												"getFileInfo:ok" == e.errMsg && t.setData({
													newmd5: e.digest,
													urldata: wx.env.USER_DATA_PATH + "/test.mp4",
													xiugaistate: 2
												});
											}
										});
									}
								});
							}
						});
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		overflow: auto;
		width: 100vw;
		height: 100vh;
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}

	.content_t {
		margin-left: 5vw;
		margin-top: 3vh;
		width: 90vw;
		height: 35vh;
	}

	.content_t_x {
		overflow: hidden;
		font-size: 30rpx;
		padding: 10rpx;
		height: 33vh;
		flex-direction: row;
		background-size: 100% 100%;
		background-position: 100% 100%;
		background-repeat: no-repeat;
	}

	.content_t_x_c {
		overflow: hidden;
		width: 87vw;
		height: 33vh;
		display: flex;
		flex-direction: colum;
		align-items: center;
	}

	.addvideos {
		width: 214rpx;
		height: 214rpx;
		color: white;
		display: flex;
		flex-direction: colum;
		align-items: center;
		justify-content: center;
	}

	.content_t_x_c button {
		border: none;
		padding: 0;
	}

	.content_t_x_t_image {
		max-width: 100%;
		max-height: 100%;
	}

	.content_t_x_c video {
		width: 100%;
		height: 100%;
		object-fit: fill;
	}

	.content_z {
		margin-left: 5vw;
		margin-top: 1vh;
		width: 90vw;
		height: 20vh;
		border-radius: 10rpx;
		border: 1px solid #0aadde;
	}

	.content_z_c {
		overflow: hidden;
		width: 100%;
		height: 100%;
	}

	.content_z_c_time {
		width: 100%;
		height: 24.9%;
		font-size: 30rpx;
		line-height: 5vh;
		color:#0aadde;
		border-radius: 10rpx;
		border-bottom: 1rpx solid #0aadde;
	}

	.content_z_c_size {
		width: 100%;
		height: 24.9%;
		line-height: 5vh;
		font-size: 30rpx;
		color:#0aadde;
		border-radius: 10rpx;
		border-bottom: 1rpx solid #0aadde;
	}

	.content_z_c_old {
		width: 100%;
		height: 24.9%;
		line-height: 5vh;
		font-size: 25rpx;
		color: #0aadde;
		border-radius: 10rpx;
		border-bottom: 1rpx solid #0aadde;
	}

	.content_z_c_new {
		width: 100%;
		height: 24.9%;
		line-height: 5vh;
		font-size: 25rpx;
		color: #0aadde;
		border-radius: 10rpx;
	}

	.content_z_c_text {
		font-size: 30rpx;
		margin-left: 10rpx;
		color: #0aadde;
	}

	.content_z_c_tishi {
		line-height: 20vh;
		text-align: center;
		font-size: 40rpx;
		color: #0aadde;
	}

	.content_reset {
		overflow: hidden;
		margin-top: 1vh;
		margin-left: 5vw;
		width: 90vw;
		height: 5vh;
		color: #0aadde;
		font-size: 30rpx;
		line-height: 5vh;
		text-align: center;
		border-radius: 40rpx;
		border: 5rpx solid #0aadde;;
	}

	.content_x {
		overflow: hidden;
		margin-left: 5vw;
		margin-top: 4vh;
		width: 90vw;
		height: 20vh;
	}

	.content_x_s {
		height: 20vh;
		width: 100%;
		display: flex;
		flex-direction: colum;
		align-items: center;
	}

	.savevideo {
		width: 214rpx;
		height: 214rpx;
		color: white;
		display: flex;
		flex-direction: colum;
		align-items: center;
		justify-content: center;
	}

	.content_x button {
		border: none;
		padding: 0;
	}

	.content_x_l_image {
		max-width: 100%;
		max-height: 100%;
	}

	ad {
		margin-top: 20rpx;
	}
</style>
