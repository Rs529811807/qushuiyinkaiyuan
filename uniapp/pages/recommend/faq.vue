<template>
	<view class="container">
		<view class="main">
			<view class="t">
				<image src="/static/image/news.png"></image> 为什么会去水印失败
			</view>
			<view class="line"></view>
			<view class="c">
				去水印解析成功率为99%左右，解析失败或点击解析无反应，主要为以下原因：
				<view class="lines"></view>
				1. 原视频被屏蔽/删除，无法解析；
				<view class="lines"></view>
				2. 原视频为私密视频，非视频作者他人不可见，无法解析；
				<view class="lines"></view>

				3. 本工具去除视频平台下载水印，某些水印为视频作者上传平台前编辑视频时自行加上的，这种情况作者水印属于视频内容一部分，无法去除；
				<view style="text-align: center;background-color: #fff;padding-bottom: 0px;">
					<view style="width: 100%;">
						<image src="/static/image/d1.jpg" style="width: 100%;height: 175px;margin-left: 0px;margin-top: 10px;"></image>
					</view>
				</view>
				<view class="lines"></view>
				4. 原视频时长超长，对于一般5分钟左右及以下的视频解析成功率99%，某些视频平台视频20-30分钟以上，会导致解析失败；


			</view>
			<view class="t">
				<image src="/static/image/news.png"></image> 为什么会下载失败？
			</view>
			<view class="line"></view>
			<view class="c">
				1. 由于手机系统及微信安全机制，保存视频到相册需要手动授权，弹出权限请求框，请点击确认。
				<view style="text-align: center;background-color: #fff;padding-bottom: 0px;">
					<view style="width: 100%;">
						<image src="/static/image/d2.jpg" style="width: 100%;height: 153px;margin-left: 0px;margin-top: 0px;"></image>
					</view>
				</view>
				<view class="lines"></view>
				2. 微信小程序平台机制限定小程序内保存文件不能超过10Mb，部分视频较长去水印后大小超过10Mb会导致下载失败，请复制链接粘贴到浏览器后进行下载。
				<view style="text-align: center;background-color: #fff;padding-bottom: 0px;">
					<view style="width: 100%;">
						<image src="/static/image/d3.jpg" style="width: 100%;height: 270px;margin-left: 0px;margin-top: 0px;"></image>
					</view>
				</view>
				<view class="lines"></view>
			</view>
		</view>
	</view>

</template>

<script>
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		width: 750rpx;
		padding-bottom: 20rpx;
	}

	image {
		width: 40rpx;
		height: 40rpx;
		margin: 0 15rpx;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 700rpx;
		background-color: white;
		margin-top: 40rpx;
		border-radius: 20rpx;
	}

	.t {
		display: flex;
		align-items: center;
		font-size: 34rpx;
		width: 690rpx;
		font-weight: bold;
		color: #495060;
		margin-top: 30rpx;
	}

	.c {
		font-size: 28rpx;
		color: #80848f;
		margin: 25rpx;
	}

	.line {
		background-color: #bbbec4;
		height: 2rpx;
		width: 680rpx;
		margin-top: 15rpx;
	}

	.lines {
		height: 20rpx;
	}

	.img {
		text-align: center;
	}
</style>
