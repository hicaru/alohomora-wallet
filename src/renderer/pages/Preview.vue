<template>
  <div :class="b()">
    <Container :class="b('container')">
      <Row :class="b('nav-items')">
        <Icon
          :class="b('logo')"
          width="50"
          height="50"
        />
      </Row>
      <Row :class="b('row-form')">
        <Column>
          <h1>
            New wallet
          </h1>
          <Button
            v-for="btn of buttons"
            :key="btn.id"
            :class="b('btn-form')"
            :variant="variants.primary"
            block
            round
            md
            @click="btn.method"
          >
            {{ btn.text }}
          </Button>
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
import uuidv4 from 'uuidv4'

import variants from '@/configs/variants'

import Container from '@/components/grids/Container'
import Row from '@/components/grids/Row'
import Column from '@/components/grids/Column'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

export default {
  name: 'Preview',
  components: {
    Container,
    Row,
    Column,
    Icon,
    Button
  },
  data () {
    return {
      variants,
      buttons: [
        {
          id: uuidv4(),
          text: 'Create wallet',
          method: this.create
        },
        {
          id: uuidv4(),
          text: 'Restore wallet',
          method: this.import
        }
      ]
    }
  },
  methods: {
    create () {
      console.log('create')
    },
    import () {
      console.log('import')
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_mixins";

$container-indent: 5vw;

.Preview {
  width: 100vw;
  height: 100vh;

  &__container {
    padding-left: $container-indent;
    padding-right: $container-indent;
  }

  &__row-form {
    height: 80vh;
    @include justify-content(center);
  }

  &__btn-form {
    margin-top: 30px;
  }
}
</style>
