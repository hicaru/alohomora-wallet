<template>
  <div :class="b()">
    <Container :class="b('container')">
      <Row :class="b('row')">
        <Icon
          :class="b('icon')"
        />
        <Icon
          :class="b('icon')"
          src="/static/icons/shape.svg"
        />
      </Row>
      <Row :class="b('row')">
        <Button sm block outline>test</Button>
      </Row>
    </Container>
  </div>
</template>

<script>
import variants from '@/configs/variants'

import Container from '@/components/grids/Container'
import Row from '@/components/grids/Row'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

export default {
  name: 'SideBar',
  components: {
    Row,
    Container,
    Icon,
    Button
  },
  data () {
    return {
      variants
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";

$container-indent: 30px !default;

.SideBar {
  width: 100%;
  height: 100vh;
  max-width: 320px;

  background-color: $gray;

  border-right: 1px solid darken($gray, 6%);

  &__icon {
    cursor: pointer;
  }

  &__container {
    padding: $container-indent $container-indent;
  }

  &__row {
    justify-content: space-between;
  }
}
</style>
