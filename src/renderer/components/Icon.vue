<template>
  <img
    :class="b({ pointer })"
    :src="src"
    :height="height"
    :width="width"
  >
</template>

<script>
export default {
  name: 'Icon',
  props: {
    src: {
      type: String,
      default: `/static/grin_mw_logo.svg`
    },
    height: {
      type: String,
      default: '30'
    },
    width: {
      type: String,
      default: '30'
    },
    pointer: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.Icon {
  &_pointer {
    cursor: pointer;
  }
}
</style>
