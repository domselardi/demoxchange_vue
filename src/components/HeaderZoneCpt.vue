<template>
  <div class="headerZone">
    <div class="flexItem">
      <div class="currencyFilter">
        <label for="fromCurrency">From currency:</label>
        <CurrencySelectorCpt
          label-text="fromCurrency"
          exchange-direction="from_currency"
          @onChange="onChange"
        />
      </div>
      <div class="currencyFilter">
        <label for="toCurrency">To currency:</label>
        <CurrencySelectorCpt
          label-text="toCurrency"
          exchange-direction="to_currency"
          @onChange="onChange"
        />
        <!--  -->
      </div>
    </div>
    <div class="flexItem">
      <router-link to="/">
        <GlowButtonCpt label-text="real time" />
      </router-link>
      <router-link to="/digital-currency-daily">
        <GlowButtonCpt label-text="daily" />
      </router-link>
      <router-link to="/digital-currency-weekly">
        <GlowButtonCpt label-text="weekly" />
      </router-link>
      <router-link to="/digital-currency-monthly">
        <GlowButtonCpt label-text="monthly" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CurrencySelectorCpt from './CurrencySelectorCpt.vue'
import GlowButtonCpt from './GlowButtonCpt.vue'
export default defineComponent({
  name: 'HeaderZoneCpt',
  emits: ['currencyFilterWasChanged'],
  components: {
    GlowButtonCpt,
    CurrencySelectorCpt
  },
  setup() {},
  methods: {
    onChange: function (theCurrency) {
      this.$emit('currencyFilterWasChanged', theCurrency)
    }
  }
})
</script>

<style scoped lang="scss">
.headerZone {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: space-between;
  width: 100%;
  margin: 2.4rem 0 0 0;
  .flexItem {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    &:first-child {
      justify-content: flex-start;
    }
    &:last-child {
      justify-content: flex-end;
      align-content: flex-end;
      a {
        margin: 0 1.2rem 0 0;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  .currencyFilter {
    margin: 0 1.2rem 0 0;
    &:last-child {
      margin: 0;
    }
    label {
      font-size: 1.2rem;
      display: block;
      margin: 0 0 0.6rem 0;
      color: azure;
    }
  }
}
@media screen and (max-width: 860px) {
  .headerZone {
    flex-direction: column;
    .flexItem {
      width: 100%;
      &:first-child {
        margin: 0 0 2rem 0;
        .currencyFilter:first-child {
          margin: 0 0.6rem 0 0;
        }
      }
      &:last-child {
        display: flex;
        justify-content: flex-start;
        a {
          margin: 0.6rem;
          &:last-child {
            margin: 0.6rem;
          }
        }
      }
    }
  }
}
</style>
