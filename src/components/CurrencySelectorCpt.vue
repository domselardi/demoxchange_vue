<script setup>
import { computed, ref, defineProps, defineEmits, onMounted } from 'vue'
import { useStore } from 'vuex'
const { state } = useStore() || {}
const currencyList = computed(() => state.currencyList.data)
const props = defineProps(['exchangeDirection', 'labelText'])
let currencySelectedOption = ref('BTC')
if (props.exchangeDirection === 'to_currency') {
  currencySelectedOption = ref('USD')
}
const emit = defineEmits(['onChange'])
function currencySelectorWasChanged() {
  const tmpCurrencyIdx = state.currencyList.data.findIndex(
    (cx) => cx.currencyCode === currencySelectedOption.value
  )
  const tmpCurrencyLabel = state.currencyList.data[tmpCurrencyIdx]
  emit('onChange', {
    direction: props.exchangeDirection,
    currencyCode: currencySelectedOption.value,
    currencyLabel: tmpCurrencyLabel['currencyName']
  })
}

onMounted(() => {
  currencySelectorWasChanged()
})
</script>

<template>
  <div class="currencySelector">
    <select :id="labelText" v-model="currencySelectedOption" @change="currencySelectorWasChanged">
      <option
        v-for="option in currencyList"
        :key="option.currencyCode"
        :value="option.currencyCode"
      >
        {{ option.currencyName }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.currencySelector {
  box-shadow:
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  outline: 0;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;
}

/* Remove IE arrow */
select::-ms-expand {
  display: none;
}

/* Custom Select */
.currencySelector {
  position: relative;
  display: flex;
  width: 20rem;
  height: 3rem;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: 0.25rem;
}

select {
  flex: 1;
  padding: 0 0.5rem;
  color: #fff;
  cursor: pointer;
}

/* Arrow */
.currencySelector::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1rem;
  background: #34495e;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
}

/* Transition */
.currencySelector:hover::after {
  color: #f39c12;
}
</style>
