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
      <Row :class="b('list-item-row')">
        <Row>
          <Lighting
            round
            :variant="tx.variant"
          />
          <Label
            :class="b('type-label')"
            :label="tx.type"
            info="10 min ago"
          />
        </Row>
        <Label
          :class="b('to-label')"
          label="To"
          :info="tx.to"
        />
        <Label
          :class="b('amount-label')"
          :label="'G' + tx.amount"
          :info="'$' + tx.amount / 2"
        />
      </Row>
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
import Row from '@/components/grids/Row'
import Label from '@/components/Label'

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
    Lighting,
    Row,
    Label
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
          to: 'none',
          amount: 10
        },
        {
          id: uuidv4(),
          type: txTypes.received,
          variant: variants.success,
          to: 'none',
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
    height: 80px;
    border-bottom: 1px lighten($black, 90%) solid;
  }
  
  &__list-item-row {
    width: 100%;
    justify-content: space-between;

    &:after {
      content: "";
      display: block;
      background: url(/static/icons/arrow.svg) no-repeat;
      height: 16px;
      width: 16px;
    }
  }

  &__type-label {
    margin-left: 14px;
  }

  &__to-label {
    width: 50%;
  }
}
</style>
