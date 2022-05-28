<script>
	// 引入检查更新模块
	import Vue from 'vue'
	export default {
		onLaunch: function () {		
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import url("/utils/common.scss");
	@import url("/utils/_utils.scss");
	page{
		width: 100%;
		height: 100%;
	}
</style>
