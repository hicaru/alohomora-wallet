<template>
  <div :class="b({ pointer, selected, variant })">
    <Container :class="b('container')">
      <Row :class="b('row')">
        <slot />
      </Row>
    </Container>
  </div>
</template>

<script>
import variants from '@/configs/variants'
import Container from '@/components/grids/Container'
import Row from '@/components/grids/Row'

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

  @include flexbox;
  @include align-items(center);

  &__container {
    padding-left: $container-indent;
    padding-right: $container-indent;
  }

  &__row {
    justify-content: space-between;
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
