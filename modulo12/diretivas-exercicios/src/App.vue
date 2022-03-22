<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Ola mundo!'"></p>
		<p v-html="'Ola Mundo'" v-destaque:fundo.atrasar="'red'"></p>
		<hr>
		<p v-text="'Ola mundo!'"></p>
		<p v-html="'Ola Mundo (Local)'" v-destaque-local:fundo.atrasar.alternar="{cor1: 'red',cor2:'green',atraso:2000}"></p>
	</div>
</template>

<script>
export default {
	directives:{
		'destaque-local':{
			bind(el,binding){
				const aplicarCor = (cor) =>{
				if(binding.arg == "fundo"){
					el.style.backgroundColor = cor
				} else{
					el.style.color = cor
				}
				}
		let atraso = binding.value.atraso
		let cor1 = binding.value.cor1
		let cor2 = binding.value.cor2
		let corAtual = cor1
		if(binding.modifiers['atrasar']){
			atraso = 3000
		}
		
			setTimeout( () => {
					if(binding.modifiers['alternar']){
					setInterval(()=>{
						corAtual = corAtual===cor1 ? cor2 : cor1 
						aplicarCor(corAtual)
					},1000)
				}else{
					aplicarCor(binding.value.cor1)
				}
			},atraso)
	}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
