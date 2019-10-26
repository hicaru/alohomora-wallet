<template>
  <Row :class="b({ pointer, selected, variant })">
    <Container :class="b('container')">
      <Row :class="b('row', { border })">
        <slot />
      </Row>
    </Container>
  </Row>
</template>

<script>
import variants from '@/configs/variants'
import Container from '@/components/grids/Container'
import Row from '@/components/grids/Row'

export const borders = {
  bottom: 'bottom',
  top: 'top'
}

export default {
  name: 'Item',
  components: {
    Container,
    Row
  },
  props: {
    pointer: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: variants.black
    },
    border: {
      type: String,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";
@import "@/styles/_mixins";

$container-indent: 20px;

.Item {
  width: 100%;
  height: 50px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  &__container {
    padding-left: $container-indent;
    padding-right: $container-indent;
  }

  &__row {
    @include justify-content(space-between);
  }

  &_pointer {
    cursor: pointer;
  }

  #{if(&, '&_selected', '&_variant-black')} {
    background-color: $black;
    color: $white;
  }
}
</style>
