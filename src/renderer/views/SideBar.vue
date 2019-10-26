<template>
  <div :class="b()">
    <Container :class="b('container')">
      <Row :class="b('row')">
        <Icon />
        <Icon
          src="/static/icons/shape.svg"
          pointer
        />
      </Row>
      <Column :class="b('column')">
        <SwitchButton
          :texts="texts"
          round
        />
      </Column>
    </Container>
    <List>
      <Item
        v-for="(item, index) of accounts"
        :key="item.id"
        :selected="accountSelected === index"
        pointer
        @click.native="accountSelected = index"
      >
        <span>
          {{ item.name }}
        </span>
        <span :class="b('list-item-amount', { gray: accountSelected !== index })">
          G{{ item.amount }}
        </span>
      </Item>
      <Item pointer>
        <Row :class="b('new-acc')">
          <Icon
            width="16" height="16"
            src="/static/icons/union.svg"
          />
          <span :class="b('list-item-text')">
            New account
          </span>
        </Row>
      </Item>
    </List>
  </div>
</template>

<script>
import uuidv4 from 'uuidv4'
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
      texts: ['Accounts', 'Contacts'],
      accountSelected: 0,
      accounts: [
        {
          id: uuidv4(),
          name: 'Nyx assasin',
          amount: 4.123
        },
        {
          id: uuidv4(),
          name: 'Arc warden',
          amount: 3.03
        },
        {
          id: uuidv4(),
          name: 'Devourer',
          amount: 10.1
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";
@import "@/styles/_mixins";

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
    @include justify-content(space-between);
  }

  &__column {
    margin-top: 34px;
  }

  &__list-item-text {
    margin-left: 10px;
  }

  &__list-item-amount {
    &_gray {
      color: lighten($black, 40%);
    }
  }
}
</style>
