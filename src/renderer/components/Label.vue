<template>
  <Column :class="b()">
    <label :class="b('label')">
      {{ label }}
    </label>
    <span :class="b('value')">
      {{ value }}
    </span>
    <span :class="b('span')">
      {{ span }}
    </span>
  </Column>
</template>

<script>
import Column from '@/components/grids/Column'

export default {
  name: 'Label',
  components: {
    Column
  },
  props: {
    label: [String, Number],
    value: [String, Number],
    span: [String, Number]
  }
}
</script>

<style lang="scss">
.Label {
  font-family: Poppins;
  font-style: normal;

  &__label,
  &__span {
    font-weight: 600;
  }

  &__label {
    font-size: 17px;
    line-height: 20px;

    letter-spacing: -0.132812px;
  }

  &__value {
    font-family: Poppins-ExtraLight;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
  }

  &__span {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
