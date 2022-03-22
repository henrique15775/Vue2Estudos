import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('tamanhoPalavra',(msg)=>{
	let mod_str = msg.split(' ')
	for(let x = 0; x<mod_str.length; x++ ){
		mod_str[x] = mod_str[x] + ` (${mod_str[x].length})`
	}
	
	return mod_str.join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
