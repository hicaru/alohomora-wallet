<template>
  <div :class="b()">
    <Row>
      <Icon />
    </Row>
  </div>
</template>

<script>
import Row from '@/components/grids/Row'
import Icon from '@/components/Icon'

export default {
  name: 'SideBar',
  components: {
    Row,
    Icon
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
