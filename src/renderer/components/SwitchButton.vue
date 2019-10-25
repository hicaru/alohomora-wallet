<template>
  <Row :class="b()">
    <Button
      sm
      block
    >
      Accounts
    </Button>
    <Button
      sm
      block
    >
      Contacts
    </Button>
  </Row>
</template>

<script>
import Button from '@/components/Button'
import Row from '@/components/grids/Row'

export default {
  name: 'SwitchButton',
  components: {
    Button,
    Row
  }
}
</script>

<style lang="scss">
.SwitchButton {
  border-radius: .25rem;
}
</style>
