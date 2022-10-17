<template>
  <header class="header">
    <h1 v-if="$slots.title" class="title">
      <slot name="title" />
    </h1>

    <div class="description">
      <slot name="description" />
    </div>

    <div class="content">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  mounted(){
    console.log(this.$slots)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
  background-color: #000;
  color: #fff;
}
</style>
