export default {
	data(){
		return {
			txt: 'Pedro é legal'
		}
	},
	filters:{
		virgular(str){
			let mod_str = str.replace(' ', ',')
			return mod_str
		}
	},
	computed:{
		texto(){
			return this.txt
		}
	}
}