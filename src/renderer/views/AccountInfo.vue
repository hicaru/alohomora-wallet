<template>
  <div :class="b()">
    <Row :class="b('row')">
      <Column>
        <label>Account</label>
        <span>{{ name }}</span>
      </Column>
      <Column>
        <label>Balance</label>
        <span>G{{ balance }}</span>
        <span>${{ balance / 2 }}</span>
      </Column>
    </Row>
  </div>
</template>

<script>
import Row from '@/components/grids/Row'
import Column from '@/components/grids/Column'

export default {
  name: 'AccountInfo',
  components: {
    Row,
    Column
  },
  props: {
    name: {
      type: String,
      required: true
    },
    balance: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_mixins";

.AccountInfo {
  &__row {
    @include justify-content(space-between);
  }
}
</style>
