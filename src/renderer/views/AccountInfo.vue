<template>
  <div :class="b()">
    <Row :class="b('account-info')">
      <Label
        :label="leftLabel"
        :value="name"
      />
      <Label
        :label="rightLabel"
        :value="gBalance"
        :span="usdBalance"
      />
    </Row>
    <Row :class="b('account-actions')">
      <Button
        v-for="btn of buttons"
        :key="btn.id"
        :class="b(btn.vname.toLowerCase())"
        :variant="variants.primary"
        md
        @click="btn.method"
      >
        <Row :class="b('btn-row')">
          <Icon
            :height="btn.size"
            :width="btn.size"
            :src="'/static/icons/' + btn.icon"
          />
          <div :class="b('btn-text')">
            {{ btn.vname }}
          </div>
        </Row>
      </Button>
    </Row>
  </div>
</template>

<script>
import uuidv4 from 'uuidv4'
import variants from '@/configs/variants'

import Row from '@/components/grids/Row'
import Label from '@/components/Label'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export default {
  name: 'AccountInfo',
  components: {
    Row,
    Label,
    Button,
    Icon
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
  },
  data () {
    return {
      variants,
      leftLabel: 'Account',
      rightLabel: 'Balance',
      buttons: [
        {
          id: uuidv4(),
          vname: 'Send',
          icon: 'send.svg',
          size: '20',
          method: this.send
        },
        {
          id: uuidv4(),
          vname: 'Receive',
          icon: 'receive.svg',
          size: '20',
          method: this.receive
        }
      ]
    }
  },
  computed: {
    gBalance () {
      return `G${this.balance}`
    },
    usdBalance () {
      return `$${this.balance / 2}`
    }
  },
  methods: {
    send () {
      console.log('send')
    },
    receive () {
      console.log('receive')
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_mixins";

.AccountInfo {
  &__account-info {
    @include justify-content(space-between);
  }

  &__account-actions {
    margin-top: 40px;
  }

  &__send,
  &__receive {
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.148438px;
  }

  &__btn-text {
    margin-left: 11px;
  }

  &__receive {
    margin-left: 20px;
  }
}
</style>
