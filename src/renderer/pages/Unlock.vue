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
        <Column :class="b('column-form')">
          <h1>Welcome back.</h1>
          <Input
            placeholder="Enter your password...."
            type="password"
            round
            md
            block
          />
          <Button
            :class="b('btn-form')"
            :variant="variants.primary"
            block
            round
            md
          >
            UNLOCK
          </Button>
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
import variants from '@/configs/variants'

import Container from '@/components/grids/Container'
import Row from '@/components/grids/Row'
import Column from '@/components/grids/Column'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default {
  name: 'Unlock',
  components: {
    Container,
    Row,
    Column,
    Icon,
    Input,
    Button
  },
  data () {
    return {
      variants
    }
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
    @include justify-content(space-between);
  }

  &__new-wallet {
    cursor: pointer;
  }

  &__row-form {
    height: 80vh;
    @include justify-content(center);
  }

  &__column-form {
    max-width: 300px;
  }

  &__btn-form {
    margin-top: 30px;
  }
}
</style>
