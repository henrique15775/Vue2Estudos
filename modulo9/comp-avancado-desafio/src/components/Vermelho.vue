<template>
    <div class="caixa vermelho">
        <slot name="vermelho">{{ txt }}</slot>
    </div>
</template>

<script>
export default {
    props:'txt'
}
</script>

<style>

</style>
