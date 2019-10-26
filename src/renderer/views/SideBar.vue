<template>
  <div :class="b()">
    <Container :class="b('container')">
      <Row :class="b('row', { icons: true })">
        <Icon />
        <Icon
          src="/static/icons/shape.svg"
          pointer
        />
      </Row>
      <Column :class="b('column')">
        <SwitchButton
          round
          :texts="texts"
        />
      </Column>
    </Container>
    <List>
      <Item selected pointer>
        <span>test</span>
        <span>1</span>
      </Item>
      <Item pointer>
        <span>test</span>
        <span>2</span>
      </Item>
      <Item pointer>
        <span>test</span>
        <span>3</span>
      </Item>
    </List>
  </div>
</template>

<script>
import variants from '@/configs/variants'

import Container from '@/components/grids/Container'
import Row from '@/components/grids/Row'
import Column from '@/components/grids/Column'
import Icon from '@/components/Icon'
import SwitchButton from '@/components/SwitchButton'
import List from '@/components/list/List'
import Item from '@/components/list/Item'

export default {
  name: 'SideBar',
  components: {
    Row,
    Column,
    Container,
    Icon,
    SwitchButton,
    List,
    Item
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
