<template>
  <div :class="b()">
    <Container :class="b('container')">
      <Row :class="b('row')">
        
      </Row>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/grids/Container'
import Row from '@/components/grids/Row'

export default {
  name: 'Home',
  components: {
    Container,
    Row
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";

$container-indent: 161;

.Home {

  &__container {
    padding-top: 53px;
    padding-left: $container-indent;
    padding-left: $container-indent;
  }

  &__row {
  }
}
</style>
