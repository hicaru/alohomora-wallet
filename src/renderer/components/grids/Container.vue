<template>
  <div :class="b()">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss">
@import "@/styles/_variables";
/**
 * 1. Centers the content. Yes, it's a bit opinionated.
 * 2. See the "width vs max-width" section
 */
.Container {
  margin-right: auto; /* 1 */
  margin-left:  auto; /* 1 */

  max-width: $container-max-width; /* 2 */
}
</style>
