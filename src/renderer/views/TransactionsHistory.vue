<template>
  <List :class="b()">
    <Item :class="b('list-item')">
      <span>Transactions</span>
      <Icon
        width="18" height="18"
        src="/static/icons/reload.svg"
        pointer
      />
    </Item>
    <Item>
      <Lighting round />
      <span>test</span>
    </Item>
    <Item>test3</Item>
  </List>
</template>

<script>
import List from '@/components/list/List'
import Item from '@/components/list/Item'
import Icon from '@/components/Icon'
import Lighting from '@/components/Lighting'

export default {
  name: 'TransactionsHistory',
  components: {
    List,
    Item,
    Icon,
    Lighting
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";
@import "@/styles/_mixins";

.TransactionsHistory {
  &__list-item {
    border-bottom: 1px lighten($black, 90%) solid;
  }
}
</style>
