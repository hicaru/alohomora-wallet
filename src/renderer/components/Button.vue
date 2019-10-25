<template>
  <button
    :class="b({ block, sm, md, variant, outline, round })"
    :disabled="disabled"
    @click="$emit('click')"
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
 * <Button sm block round :variant="variants.danger">test</Button>
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
@import "@/styles/_mixins";

.Button {
  cursor: pointer;

  &_round {
    border-radius: .25rem;
  }
  
  &_block {
    display: block;

    width: 100%;
    height: 100%;
  }

  &_outline {
    background-color: transparent !important;
    color: $black !important;
  }

  // Scale. //
  &_sm {
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  &_md {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    padding: .35rem 2.75rem;
  }

  // Colors. //
  &_variant-black {
    background-color: $black;
    border: 1px solid $black;
    color: $white;
  }

  &_variant-primary {
    background-color: $primary;
    border: 1px solid $primary;
    color: $black;
  }

  &_variant-white {
    background-color: $white;
    border: 1px solid $black;
    color: $black;
  }

  &[disabled="disabled"] {
    cursor: unset;
    opacity: 0.5;
  }
}
</style>
