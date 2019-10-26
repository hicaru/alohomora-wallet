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
    <span :class="b('info')">
      {{ info }}
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
    span: [String, Number],
    info: [String, Number]
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";

.Label {
  font-family: Poppins;
  font-style: normal;

  &__label,
  &__span {
    font-weight: 600;
  }

  &__value,
  &__info {
    font-family: Poppins-ExtraLight;
  }

  &__info,
  &__label {
    font-size: 17px;
    line-height: 20px;
  }

  &__label {
    letter-spacing: -0.132812px;
  }

  &__value {
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
  }

  &__span {
    font-size: 16px;
    line-height: 19px;
  }

  &__info {
    color: lighten($black, 40%);
  }
}
</style>
