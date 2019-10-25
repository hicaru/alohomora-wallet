<template>
  <Row :class="b()">
    <Button
      v-for="(el, index) of texts"
      :key="el"
      :class="b('btn-' + index)"
      :variant="getVariant(index)"
      @click="onSelect(index)"
      sm
      block
    >
      {{ el }}
    </Button>
  </Row>
</template>

<script>
import variants from '@/configs/variants'

import Button from '@/components/Button'
import Row from '@/components/grids/Row'

/**
 * @component Switch Button.
 * @example
 * const texts = ['test 1', 'test2']
 * <SwitchButton :texts="texts" />
 */
export default {
  name: 'SwitchButton',
  props: {
    texts: {
      type: Array,
      required: true
    }
  },
  components: {
    Button,
    Row
  },
  data () {
    return {
      variants,
      selected: 0
    }
  },
  methods: {
    getVariant (index) {
      if (this.selected === index) {
        return this.variants.black
      }

      return this.variants.white
    },
    onSelect (index) {
      this.selected = index
      this.$emit('selected', this.texts[this.selected])
    }
  }
}
</script>

<style lang="scss">
.SwitchButton {
  &__btn-0 {
    border-radius: 3px 0 0 3px;
  }

  &__btn-1 {
    border-radius: 0px 3px 3px 0px;
  }
}
</style>
