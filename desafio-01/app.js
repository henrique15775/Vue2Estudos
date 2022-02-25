new Vue({
    el:"#desafio",
    data:{
      nome: "Luís Henrique",
      idade: 10,
      link: "http://google.com.br/"
    },
    methods:{
      alterarTitulo(event){
        this.titulo= event.target.value;
      },
      retornar(){
        return 1.5
      }
    }
  })