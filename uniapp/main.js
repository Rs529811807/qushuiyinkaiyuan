import Vue from 'vue'
import App from './App'

import uView from 'uview-ui';
Vue.use(uView);

var urlteml = "https://qushuiyin.emojy.cn";

/* 短视频去水印接口 */
Vue.prototype.watermarkUrl = urlteml+'/wp-json/watch-life-net/v1/weixin/qushuiyin';
Vue.prototype.guanggaopeizhi = urlteml+'/wp-json/watch-life-net/v1/options';

Vue.prototype.downloadvideo = urlteml+'/wp-json/watch-life-net/v1/weixin/downloadvideo?url=';

// 模拟继承微信setData的方法
Vue.prototype.setData = function(obj) {
	// console.log('这里是方法');
	let that = this;
	let keys = [];
	let val, data;
	Object.keys(obj).forEach(function(key) {
		keys = key.split('.');
		val = obj[key];
		data = that.$data;
		keys.forEach(function(key2, index) {
			// console.log(key2)
			if (index + 1 == keys.length) {
				that.$set(data, key2, val);
			} else {
				if (!data[key2]) {
					that.$set(data, key2, {});
				}
			}
			data = data[key2];
		})
	});
}

// 显示失败提示框
Vue.prototype.showError = function(msg, callback) {
	uni.showModal({
		title: '友情提示',
		content: msg,
		showCancel: false,
		success: function(res) {
			// callback && (setTimeout(function() {
			//   callback();
			// }, 1500));
			callback && callback();
		}
	});
}
/**
 * 执行用户登录
 */
Vue.prototype.doLogin = function(delta) {
	// 保存当前页面
	let pages = getCurrentPages();
	if (pages.length) {
		// 登录完成后跳转回原页面  有报错，暂时弃用
		// let currentPage = pages[pages.length - 1];
		// "pages/login/login" != currentPage.route &&  uni.setStorageSync("currentPage", currentPage);
	}
	// 跳转授权页面
	uni.navigateTo({
		url: "/pages/login/login?delta=" + (delta || 1)
	});
}

/**
 * 显示成功提示框
 */
Vue.prototype.showSuccess = function(msg, callback) {
	uni.showToast({
		title: msg,
		icon: 'success',
		mask: true,
		duration: 1500,
		success: function() {
			callback && (setTimeout(function() {
				callback();
			}, 1500));
		}
	});
}

Vue.prototype.showModal = function(msg, callback) {
	// #ifdef APP-PLUS
	uni.showModal({
		title: '友情提示',
		content: msg,
		cancelText: '确认',
		confirmText: '取消',
		success: function(res) {
			if (res.cancel) callback && callback(res);
		}
	});
	return;
	// #endif

	// #ifdef MP-WEIXIN || MP-QQ
	uni.showModal({
		title: '友情提示',
		content: msg,
		success: function(res) {
			if (res.confirm)  callback && callback(res);
		},
	});
	return;
	// #endif
}

/* 打开外部浏览器 */
Vue.prototype.openBrowser = function(url){
	// #ifdef MP-WEIXIN || MP-QQ
		return;
	// #endif
	
	// #ifdef APP-PLUS
		plus.runtime.openURL(url);
		return;
	// #endif
	
	// #ifdef H5
		window.location.href = url;
		return;
	// #endif
}
Vue.prototype.showLoading = function(title = '加载中', callback) {
	uni.showLoading({
		title: title,
		mask: true,
		success: function(res) {
			if (res.cancel) callback && callback(res);
		}
	});
	return;
}

Vue.prototype.hideLoading = function() {
	uni.hideLoading();
	return;
}


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
