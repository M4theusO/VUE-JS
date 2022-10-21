<template>
    <div>
        {{ $route.params.id }}
        Usuário
    </div>
</template>

<script>
    export default{
        created(){
            console.log(this.$router)
        }
    }
</script>