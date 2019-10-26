<template>
  <div :class="b()">
    <Container :class="b('container')">
      <AccountInfo
        name="Savings"
        balance="3.0001"
      />
      <TransactionsHistory
        :class="b('tx-list')"
      />
    </Container>
  </div>
</template>

<script>
import Container from '@/components/grids/Container'
import Row from '@/components/grids/Row'
import AccountInfo from '@/views/AccountInfo'
import TransactionsHistory from '@/views/TransactionsHistory'

export default {
  name: 'Home',
  components: {
    Container,
    Row,
    AccountInfo,
    TransactionsHistory
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";

$container-indent: 10vw;

.Home {
  width: 100%;
  height: 100%;

  &__container {
    padding-top: 53px;
    padding-left: $container-indent;
    padding-right: $container-indent;
  }

  &__tx-list {
    margin-top: 20px;
  }
}
</style>
