<template>
  <Row :class="b()">
    <SideBar v-show="enable" />
    <router-view></router-view>
  </Row>
</template>

<script>
import { mapState } from 'vuex'
import SideBar from '@/views/SideBar'
import Row from '@/components/grids/Row'

export default {
  name: 'App',
  components: {
    SideBar,
    Row
  },
  computed: {
    ...mapState('wallet', [
      'enable'
    ])
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
