<template>
  <button
    :class="b({ block, sm, md, lg, xl, xll, variant, outline })"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
import variants from '@/configs/variants'

/**
 * @component Button.
 * @example
 * import variants from '@/configs/variants'
 * <Button sm block :variant="variants.danger">test</Button>
 */
export default {
  name: 'Button',
  props: {
    block: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    },
    md: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    },
    xl: {
      type: Boolean,
      default: false
    },
    xll: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: variants.black
    },
    outline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";
@import "@/styles/_mixins";

.Button {
  border-radius: .25rem;
  
  &_block {
    display: block;
  }

  &_outline {
    background-color: transparent;
    border: 1px solid transparent;
  }

  // Scale. //
  &_sm {
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  &_md {

  }

  // Colors. //
  &_variant-black {
    background-color: $black;
    border: 1px solid $black;
    color: $white;
  }
}
</style>
