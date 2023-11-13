<template>
  <div class="logoHolder">
    <router-link to="/">
      <img src="/logo.svg" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LogoCpt',
  components: {},
  setup() {}
})
</script>

<style scoped lang="scss">
.logoHolder {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logoHolder a {
  display: block;
  padding: 2rem 0;
  max-width: 6rem;
  width: 6rem;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  &:hover img {
    opacity: 0.75;
  }
}
</style>
