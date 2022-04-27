/* eslint-disable no-console */
<template>

	<div id="app" class="container-fluid">
		<!--
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
		<hr>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa">
			</div>
		</transition>
		<hr>

		<b-button variant="primary" @click="componenteSelecionado = 'AlertaInfo' ">Info</b-button>
		<b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia' ">Advertencia</b-button>
		
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition>
			-->
		<hr>
		
		<transition-group name="slide">
			<b-list-group  v-for="(aluno,i) in alunos" :key="aluno" >
			<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>

	</div>
</template>
	

<script>
import AlertaAdvertencia from './AlertaAdvertencia.vue'
import AlertaInfo from './AlertaInfo.vue'
export default {
	components:{AlertaAdvertencia,AlertaInfo},
	data(){
		return {
			msg: 'Uma mensagem para o usuário.',
			exibir: true,
			modo_animacao: 'fade',
			exibir2: false,
			larguraBase: 10,
			componenteSelecionado:'AlertaInfo',
			alunos:['Henrique','Gabriel','Matheus']
		}
	},
	methods:{
		removerAluno(indice){
			this.alunos.splice(indice,1)
		},
		beforeEnter(el){
			console.log("Before-enter")
			this.larguraBase=0
		},
		enter(el,done){
			console.log('enter')
			let rodada = 1
			const temporizador = setInterval(()=>{
				const novaLargura = this.larguraBase + rodada * 1
				el.style.width=`${novaLargura}px`
				rodada++
				if(rodada > 300){
					clearInterval(temporizador)
					done()
				}
			},100)
			
		},
		afterEnter(){
			console.log('afterEnter')

		},
		enterCancelled(){
			console.log("enter-cancelled")
		},
		beforeLeave(el){
			console.log("Before-Leave")
			this.larguraBase=300
			el.style.width=`${this.larguraBase}px`
		},
		leave(el,done){
			console.log('leave')
			done()
		},
		afterLeave(el){
			console.log('afterLeave')

		},
		leaveCancelled(){
			console.log("leave-cancelled")
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

.caixa{
	height:100px;
	width:100px;
	background-color:green;
}

.fade-enter{
	opacity: 1;
}

.fade-enter-active{
	transition: opacity 0.25s;
}

.fade-enter-to{
	opacity: 1;
}

.fade-leave{
	opacity: 1;
}

.fade-leave-active{
	transition: opacity 0.25s;
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
