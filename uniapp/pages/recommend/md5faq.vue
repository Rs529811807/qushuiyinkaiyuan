<template>
	<view class="content" style="background: #090722;">
	    <view class="content_kami_shuoming">
	        <view class="content_shuoming_li_t">短视频MD5是什么?</view>
	        <view class="content_shuoming_li">   答：MD5值类似于人类的身份证，每一个MD5值对于小视频本身都是独一无二的，平台自有系统通过判断MD5值是验证视频是否重复的手段之一</view>
	    </view>
	    <view class="content_top">
	  修改MD5前,上传视频原创是别人的(如下图)
	  </view>
	    <view class="content_img">
	        <image src="/static/image/xiugaiqian.jpg"></image>
	    </view>
	    <view class="content_top">
	  修改MD5后,上传视频原创是自己的(如下图)
	  </view>
	    <view class="content_img">
	        <image src="/static/image/xiugaihou.jpg"></image>
	    </view>
	    <view class="kongbaibottom"></view>
	</view>

</template>

<script>
</script>

<style>
	.content {
	    overflow: auto;
	    width: 100vw;
	    height: 100vh;
	    background-size: 100% 100%;
	    background-position: center;
	    background-repeat: no-repeat;
	    background-image: url("http://img.qushuiyin.top/xcx/md5/bg_main.png");
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
	
	.content_kami_shuoming {
	    width: 90vw;
	    height: 20vh;
	    margin-top: 3vh;
	    margin-left: 5vw;
	}
	
	.content_shuoming_li {
	    margin-top: 0.5vh;
	    font-size: 30rpx;
	    color: white;
	    margin-left: 1vw;
	}
	
	.content_shuoming_li_t {
	    margin-top: 2vh;
	    font-size: 35rpx;
	    color: #95ece6;
	    margin-left: 1vw;
	}
	
	.kongbaibottom {
	    height: 5vh;
	}
</style>
