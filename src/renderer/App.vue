<template>
  <div :class="b()">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "@/styles";
@import "@/styles/_fonts";
@import "@/styles/_general";
</style>
