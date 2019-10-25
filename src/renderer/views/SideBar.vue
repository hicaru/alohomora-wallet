<template>
  <div :class="b()">
    <Row></Row>
  </div>
</template>

<script>
import Row from '@/components/grids/Row'

export default {
  name: 'SideBar',
  components: {
    Row
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";
.SideBar {
  width: 100%;
  height: 100vh;
  max-width: 320px;

  background-color: $gray;

  border-right: 1px solid darken($gray, 6%);
}
</style>
