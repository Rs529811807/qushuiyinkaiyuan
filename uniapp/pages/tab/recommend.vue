<template>
	<view class="page_box mb12 pad bg">
		<view class="panel mt12">
			<view class="ml12 mt12">
				<u-section title="任务" :right="false"></u-section>
			</view>
			<view class="ml12 mt24 mb24 f20">
				<text>邀请好友</text>
				<view class="fr mr24">
					<u-button open-type="share">去 邀 请</u-button>
				</view>
			</view>
			
			<!-- #ifdef MP-WEIXIN || MP-QQ -->
			<view v-if="videoAdid">
				<ad :unit-id="videoAdid"  ad-type="video" ad-theme="white"></ad>
			</view>
			<!-- #endif -->
		</view>
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
	.bg{
		background-color: #f8f8f9;
	}
	.panel{
		background-color: #fff;
		width: 100%;
		border-radius: 5px;
		box-shadow: 4rpx 4rpx 5rpx #e9eaec;
	}
</style>
