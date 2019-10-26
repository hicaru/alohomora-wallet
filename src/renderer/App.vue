<template>
  <Row :class="b()">
    <SideBar />
    <router-view></router-view>
  </Row>
</template>

<script>
import SideBar from '@/views/SideBar'
import Row from '@/components/grids/Row'

export default {
  name: 'App',
  components: {
    SideBar,
    Row
  }
}
</script>

<style lang="scss">
@import "@/styles";
@import "@/styles/_fonts";
@import "@/styles/_general";
@import "@/styles/_mixins";

.App {
  @include align-items(unset);
}
</style>
