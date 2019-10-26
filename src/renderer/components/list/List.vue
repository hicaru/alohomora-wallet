<template>
  <Column :class="b()">
    <slot />
  </Column>
</template>

<script>
import Column from '@/components/grids/Column'

export default {
  name: 'List',
  components: {
    Column
  }
}
</script>

<style lang="scss">
.List {
}
</style>
