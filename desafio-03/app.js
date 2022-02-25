new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        aplicarC1: false
    },computed:{
        resultado(){
            return this.valor==37 ? "Valor igual" : "Valor diferente"
        
        },
        estilo1(){
            return {
                    c1: this.aplicarC1,
                    c2: !this.aplicarC1
                }
        }
    },
    watch:{
        valor(ant, after){
            instance = this;
            setTimeout(()=>{
                instance.valor = 0
            },5000)
        }
       }
    }
);