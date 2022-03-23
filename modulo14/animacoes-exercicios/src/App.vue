<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Show message</b-button>
		<transition name="slide">
			<b-alert variant="info" show v-if="exibir"> {{ msg }} </b-alert>
		</transition>
		<hr>
		<b-select v-model="modo_animacao">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<transition :name="modo_animacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" type="animation" key="info"> {{ msg }} </b-alert>
			<b-alert variant="warning" show v-else type="animation" key="warn"> {{ msg }} </b-alert>
		</transition>
		<hr>
		<transition 
			name="slide"
			enter-active-class="animated bounce"
			
			leave-active-class="animated shake"
			>
			<b-alert variant="info" show v-show="exibir" type="animation"> {{ msg }} </b-alert>
		</transition>
	</div>
</template>
	

<script>

export default {
	data(){
		return {
			msg: 'Uma mensagem para o usuário.',
			exibir: true,
			modo_animacao: 'fade'

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
	font-size: 1.5rem;
}


.fade-enter{
	opacity: 0;
}

.fade-enter-active{
	transition: opacity 2s;
}

.fade-enter-to{
	opacity: 1;
}

.fade-leave{
	opacity: 1;
}

.fade-leave-active{
	transition: opacity 2s;
}

.fade-leave-to{
	opacity:0;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0)}
}

@keyframes slide-out {
	from { transform: translateY(0px); }
	to { transform: translateY(40px)}
}

.slide-enter-active{
	animation: slide-in 2s ease;
	transition: opacity 2s;

}

.slide-leave-active{
	animation: slide-out 2s ease;
	transition: opacity 6s;
}


</style>
