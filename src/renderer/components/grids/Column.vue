<template>
  <div :class="b()">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Column'
}
</script>

<style lang="scss">
@import "@/styles/_mixins";

.Column {
  @include flexbox;
  @include flex-direction(column);
}
</style>
