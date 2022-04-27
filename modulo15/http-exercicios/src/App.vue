<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input 
					type="text" 
					size="lg"
					v-model="usuario.nome"
					placeholder="Informe o Nome -> "
					
				>
					
				</b-form-input>
				<b-button @click.prevent="enviarUser">Save</b-button>
			</b-form-group>

			<b-button @click.prevent="getHTTP">Get usuarios</b-button>
			<ul>
				<li v-for="(user,id) in usuarios" :key="id">
					{{ user.email }}
					<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
					<b-button variant="danger" class="ml-3" size="lg" @click="deletar(id)">Excluir</b-button>
				</li>
			</ul>
		</b-card>
	</div>
</template>

<script>
	
export default {
	data(){
		return{	
			usuarios:[],
			id: null,
			usuario: {
				nome: ''
			}
		}
	},
	methods:{
		deletar(id){
			this.$http.delete(`/usuarios/${id}.json`).then(()=>{
				this.limpar()
			})
		},
		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}
		}
		,
		limpar(){
			this.usuario.nome=''
			this.id = null
		},
		enviarUser(){
			this.$http.post('usuarios.json', {
			nome:	this.usuario.nome,
			email:	this.usuario.nome + '@gmail.com'
		}).then(() => {
			this.limpar()
		})	
		}
	,
	getHTTP(){
		this.$http('usuarios.json').then(res => {
			this.usuarios = res.data
			console.log(res.data)
		})
	}
	/*created(){
		this.$http.post('usuarios.json', {
			nome:'Maria',
			email:'12345@gmail.com'
		}).then(res => {console.log(res)})
	}*/
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
