<template>
  <div :class="b()">
    <Container :class="b('container')">
      <Row :class="b('nav-items')">
        <Icon
          :class="b('logo')"
          width="50"
          height="50"
        />
        <h3 :class="b('new-wallet')">
          New wallet
        </h3>
      </Row>
      <Row :class="b('row-form')">
        <Column>
          <h1>Welcome back.</h1>
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/grids/Container'
import Row from '@/components/grids/Row'
import Column from '@/components/grids/Column'
import Icon from '@/components/Icon'

export default {
  name: 'Unlock',
  components: {
    Container,
    Row,
    Column,
    Icon
  }
}
</script>

<style lang="scss">
@import "@/styles/_mixins";

$container-indent: 5vw;

.Unlock {
  width: 100vw;
  height: 100vh;

  &__container {
    padding-left: $container-indent;
    padding-right: $container-indent;
  }

  &__nav-items {
    justify-content: space-between;
  }

  &__new-wallet {
    cursor: pointer;
  }

  &__row-form {
    height: 80vh;
    @include justify-content(center);
  }
}
</style>
