<template>
  <input
    :class="b({ block, sm, md, variant, round })"
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
  >
</template>

<script>
import variants from '@/configs/variants'

export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    },
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

.Input {
  box-sizing: border-box;

  &_round {
    border-radius: 3px;
  }

  &_block {
    display: block;
  }

    // Scale. //
  &_sm {
    padding: .1rem .1rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  &_md {
    font-size: 21px;
    line-height: 25px;
    padding: .5rem .1rem;
    text-indent: 15px;
  }

  // Colors. //
  &_variant-black {
    border: 1px solid lighten($black, 80%);
    color: lighten($black, 40%);
  }

  &[disabled="disabled"] {
    cursor: unset;
    opacity: 0.5;
  }
}
</style>
