<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <button @click="alterarNome()"> Alterar Nome </button>
        <button @click="reiniciarFn()"> Reiniciar (Callback) </button>
        <p>Nome do usuário: {{ nome }}</p>
    </div>
</template>

<script>
export default {
    props:{
        nome: [String, Array],
        reiniciarFn: [Function],
        idade:[Number]

    },
    methods:{
        alterarNome(){
            this.nome="Kkkkk",
            this.$emit('nomeMudou', this.nome)
        }/*,
        reiniciarNome(){
          //  this.nome = "Ativou metodo de comunicação callback"
            this.$emit('nomeMudou','josuoe')
        }*/
    }
}
</script>

<style scoped>
    .componente {
        flex: 1; 
        background-color: #ec485f;
        color: #fff;
        border-radius: 6px;
    }
</style>
