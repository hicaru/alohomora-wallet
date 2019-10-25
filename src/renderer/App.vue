<template>
  <div :class="b()">
    <SideBar />
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from '@/views/SideBar'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style lang="scss">
@import "@/styles";
@import "@/styles/_fonts";
@import "@/styles/_general";
</style>
