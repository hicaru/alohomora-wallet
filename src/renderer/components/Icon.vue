<template>
  <div>
    <img
      :class="b()"
      :src="src"
      :height="height"
      :width="width"
    >
  </div>
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
    }
  }
}
</script>

<style lang="scss">

</style>
