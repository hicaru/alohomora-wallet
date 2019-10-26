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
    <Item>test2</Item>
    <Item>test3</Item>
  </List>
</template>

<script>
import List from '@/components/list/List'
import Item from '@/components/list/Item'
import Icon from '@/components/Icon'

export default {
  name: 'TransactionsHistory',
  components: {
    List,
    Item,
    Icon
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
