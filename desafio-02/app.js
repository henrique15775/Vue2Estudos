new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertar(event){
            window.alert("Voce clicou no botão!")
        },
        armazenar(event){
            this.valor = event.target.value
        },
        armazenar2(event){
            this.valor = event.target.value
        }
    },
    computed: {

    },
    watch: {

    }
})