<template>
<view class="container">
    <view class="main">
        <view class="t">
            <image src="/static/image/bangzhu.png"></image> 支持哪些平台？
        </view>
        <view class="line"></view>
        <view class="c">
			1.目前支持：抖音、火山、头条、快手、梨视频、美拍、陌陌、皮皮搞笑、皮皮虾、全民搞笑、刷宝、微视、小咖秀、最右、B站、微博、秒拍等等。
		</view>
        <view class="t">
            <image src="/static/image/bangzhu.png"></image> 如何去水印？
        </view>
        <view class="line"></view>
        <view class="c">
			1.打开需要去水印的APP，找到分享按钮点击分享选择“复制链接”。(也可看首页简易教程怎么获取)
			<view class="lines"></view>
			2.打开本程序会自动获取到复制的链接，点击粘贴，然后再点击解析就可以获取到去除水印的视频了。
		</view>
        <view class="t">
            <image src="/static/image/bangzhu.png"></image> 为什么我解析了视频还有水印？
        </view>
        <view class="line"></view>
        <view class="c">
			请检查AAP中原作者上传的视频本身是否有水印，如果视频本身有水印暂时是无法去除的，抱歉!
		</view>
        <view class="t">
            <image src="/static/image/bangzhu.png"></image> 为什么无法下载视频？
        </view>
        <view class="line"></view>
        <view class="c">
			如果视频大于10M，小程序是无法直接下载的，可以复制下载链接通过其他方法下载:
			<view class="lines"></view>
			ios用户建议使用[Docunments]或者[捷径]下载视频(App store下载即可);
			<view class="lines"></view>
			安卓用户建议使用QQ浏览器下载视频;
		</view>
        <view class="t">
            <image src="/static/image/bangzhu.png"></image> 解析失败会扣次数吗？
        </view>
        <view class="line"></view>
        <view class="c">
			不会的，请放心使用。
			<view class="lines"></view>
			如果由于系统异常导致的错误扣次数，您可联系管理员为您补偿解析次数。
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
	    width: 30rpx;
	    height: 30rpx;
	    margin: 0 15rpx;
	}
	
	.main {
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    width: 700rpx;
	    background-color: white;
	    margin-top: 20rpx;
	    border-radius: 20rpx;
	}
	
	.t {
	    display: flex;
	    align-items: center;
	    font-size: 30rpx;
	    width: 690rpx;
	    font-weight: bold;
	    color: #495060;
	    margin-top: 10rpx;
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
	
	.content_top {
	    margin-left: 5vw;
	    margin-top: 2vh;
	    height: 5vh;
	    width: 90vw;
	    color: white;
	    font-size: 30rpx;
	    line-height: 5vh;
	}
	
	.content_img {
	    margin-left: 5vw;
	    margin-top: 2vh;
	    height: 30vh;
	    width: 90vw;
	}
	
	.content_img image {
	    height: 100%;
	    width: 100%;
	    border-radius: 5px;
	}
</style>
