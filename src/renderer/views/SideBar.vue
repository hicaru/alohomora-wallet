<template>
  <div :class="b()">
    <Container :class="b('container')">
      <Row :class="b('row', { icons: true })">
        <Icon
          :class="b('icon')"
        />
        <Icon
          :class="b('icon')"
          src="/static/icons/shape.svg"
        />
      </Row>
      <Column :class="b('column')">
        <SwitchButton
          round
          :texts="texts"
        />
      </Column>
    </Container>
  </div>
</template>

<script>
import variants from '@/configs/variants'

import Container from '@/components/grids/Container'
import Row from '@/components/grids/Row'
import Column from '@/components/grids/Column'
import Icon from '@/components/Icon'
import SwitchButton from '@/components/SwitchButton'

export default {
  name: 'SideBar',
  components: {
    Row,
    Column,
    Container,
    Icon,
    SwitchButton
  },
  data () {
    return {
      variants,
      texts: ['Accounts', 'Contacts']
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
  max-width: 250px;

  background-color: $gray;

  border-right: 1px solid darken($gray, 6%);

  &__icon {
    cursor: pointer;
  }

  &__container {
    padding: $container-indent $container-indent;
  }

  &__row {
    margin-top: 4px;
    justify-content: space-between;

    &_icons {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  &__column {
    margin-top: 34px;
  }
}
</style>
