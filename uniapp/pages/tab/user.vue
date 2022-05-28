<template>
	<view class="">
		<view class="UCenter-bg">
			<u-avatar></u-avatar>
		</view>
		<!-- #ifdef MP-WEIXIN || MP-QQ -->
		<button open-type="contact" class="b-f btn">
			<u-cell-item icon="server-man" color='#189f33' title="在线客服"></u-cell-item>
		</button>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN || MP-QQ -->
		<view v-if="videoAdid">
			<ad :unit-id="videoAdid"  ad-type="video" ad-theme="white"></ad>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				videoAdid:   uni.getStorageSync('videoAdid')
			}
		}
		}
</script>

<style>
	.UCenter-bg {
	    background: #FD6B30;
	    background-size: cover;
	    height: 346rpx;
	    display: flex;
	    justify-content: center;
	    overflow: hidden;
	    position: relative;
	    flex-direction: column;
	    align-items: center;
	    color: #fff;
	    font-weight: 300;
	    text-shadow: 0 0 3px rgba(0,0,0,0.3);
	}
	
	.btn{
		position: initial;
		padding-left: 0px;
		padding-right: 0px;
	}
</style>
