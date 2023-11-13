<script setup>
import LogoCpt from '../components/LogoCpt.vue'
import HeaderZoneCpt from '../components/HeaderZoneCpt.vue'
import LoaderCpt from '../components/LoaderCpt.vue'
const workInProgress = true
</script>
<template>
  <div class="appHolder demoxchangeDigitalCurrencyWeeklyView">
    <LogoCpt />
    <HeaderZoneCpt />
    <LoaderCpt v-if="workInProgress" />
    <p class="viewNotready">This view is not ready yet...</p>
  </div>
</template>

<style scoped lang="scss"></style>
