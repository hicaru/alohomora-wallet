<template>
  <div :class="b({ wrap })">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    wrap: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_mixins";

.Row {
  @include flexbox;
}
</style>
