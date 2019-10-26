<template>
  <List :class="b()">
    <Item :class="b('list-item')">
      <span>
        Transactions
      </span>
      <Icon
        width="18" height="18"
        src="/static/icons/reload.svg"
        pointer
      />
    </Item>
    <Item
      v-for="tx of txList"
      :key="tx.id"
      :class="b('list-item')"
    >
      <Lighting
        round
        :variant="tx.variant"
      />
      <span>
        {{ tx.type }}
      </span>
    </Item>
  </List>
</template>

<script>
import uuidv4 from 'uuidv4'
import variants from '@/configs/variants'

import List from '@/components/list/List'
import Item from '@/components/list/Item'
import Icon from '@/components/Icon'
import Lighting from '@/components/Lighting'

const txTypes = {
  send: 'Send',
  received: 'Received'
}

export default {
  name: 'TransactionsHistory',
  components: {
    List,
    Item,
    Icon,
    Lighting
  },
  data () {
    return {
      txList: [
        {
          id: uuidv4(),
          type: txTypes.send,
          variant: variants.danger,
          to: 'Ogre mage',
          amount: 5
        },
        {
          id: uuidv4(),
          type: txTypes.received,
          variant: variants.success,
          to: null,
          amount: 10
        },
        {
          id: uuidv4(),
          type: txTypes.received,
          variant: variants.success,
          to: null,
          amount: 11
        }
      ]
    }
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
