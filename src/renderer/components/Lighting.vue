<template>
  <div :class="b({ variant, round })" />
</template>

<script>
import variants from '@/configs/variants'

export default {
  name: 'Lighting',
  props: {
    variant: {
      type: String,
      default: variants.success
    },
    round: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";

.Lighting {
  min-width: 10px;
  min-height: 10px;

  &_round {
    border-radius: 50%;
  }

  &_variant-success {
    background-color: $success;
  }

  &_variant-success {
    background-color: $danger;
  }
}
</style>
