<template>
	<view class="">
		<image class="image" :src="images" mode=""></image>
		<view class="mt24 x-bc pad">
			<u-button type="warning" shape="circle" @click="saveImageToPhotosAlbum"><u-icon name="photo"></u-icon>保存到相册</u-button>
			<u-button type="warning" shape="circle" open-type="share"><u-icon name="share"></u-icon>分享到好友</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				progress:0,
				images: '',
			}
		},
		methods:{
			saveImageToPhotosAlbum(){
				var t = this;
				t.progress = 0;
				uni.showToast({
					title: "开始下载！",
					icon: "loading",
					duration: 1e3
				}), uni.downloadFile({
					url: 'https://mp.xiaowo6.cn/watermark/f.jpg',
					success: function(a) {
						200 === a.statusCode && (uni.hideToast({}), uni.saveImageToPhotosAlbum({
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
						uni.hideToast({}), uni.showModal({
							title: "下载失败",
							content: a.message,
							confirmColor: "#ff9900",
							showCancel: !1,
							success: function(a) {
								t.setData({});
							}
						});
					}
				}).onProgressUpdate(function(a) {
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
		}
	}
</script>

<style>
	.image{
		width: 100%;
		height: 600px;
	}
</style>
