<script setup>
import { defineProps } from 'vue'
defineProps(['labelText'])
</script>

<template>
  <button class="glowBtn" type="button">
    {{ labelText }}
  </button>
</template>

<style lang="scss" scoped>
.glowBtn {
  width: auto;
  padding: 0 2.4rem;
  height: 3rem;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 1rem;
  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -0.2rem;
    left: -0.2rem;
    background-size: 400%;
    z-index: -1;
    filter: blur(0.5rem);
    width: calc(100% + 0.4rem);
    height: calc(100% + 0.4rem);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 1rem;
  }
  &:active {
    color: #000;
    &:after {
      background: transparent;
    }
  }
  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 1rem;
  }
  &:hover {
    color: black;
    &:after {
      background-color: rgba(92, 180, 111, 0.77);
    }
  }
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.activatedRoute {
  .glowBtn {
    color: #18a57e;
    font-weight: bold;
    &:before {
      opacity: 1;
    }
    &:after {
      background: #111;
    }
  }
}
</style>
