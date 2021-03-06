'use strict';

window.onload = function () {
	Vue.component('config-list', {
		props: ['config'],
		template: `<fieldset class="form-group"><label v-bind:id=config.id>{{config.name}}</label>
		<input type="text" v-on:blur="changeConfig" v-model="config.setting"></fieldset>`,
		data() {
			return {
				configList: {}
			};
		},
		methods: {
			// Method called on blur of the input
			changeConfig(e) {
				// This new object will record values on event change
				let newConfig = {
					id: e.path[1].firstChild.id,
					name: e.path[1].innerText,
					setting: e.target.value
				};
				// Send the new object on the post route
				this.$http.post('/settings/config', newConfig)
				.then(function (res) {
					console.log(res.body);
				});
			}
		}
	});
	new Vue({
		el: '.app',
		data() {
			return {
				configList: []
			};
		},
		created: function () {
			// Call this method as soon as the page loads
			this.fetchConfig();
		},
		methods: {
			/* This method is called as soon as the page loads
			and it makes a get request on the get route */
			fetchConfig() {
				this.$http.get('/settings/config')
				.then(function (res) {
					this.configList = res.body;
				});
			}
		}
	});
};
