import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('onSecond', {
	bind(el,binding){
		el.addEventListener(binding.arg,()=>{
			window.alert(binding.value)
		})
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
