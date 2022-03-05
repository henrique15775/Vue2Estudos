<template>
  <div id="app">
    <app-contadores />
    <button @click="contador += '#'">?</button>
    <p>{{ contador }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
    contador: ""}
  }
 
}
</script>

<style>

</style>
