<template>
  <div class="loading" :style="{height:height+'px'}">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
    <div class="line4"></div>
    <div class="line5"></div>
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 64
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes load {
  0% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
  40% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
}
.loading {
  display: flex;
  justify-content: center;
  > div {
    width: 14px;
    height: 100%;
    display: inline-block;
    margin-right: 5px;
    background: #444444;
    animation: load 1.2s ease-in-out infinite;
  }
  .line1 {
    animation-delay: -1.1s;
  }
  .line2 {
    animation-delay: -1s;
  }
  .line3 {
    animation-delay: -0.9s;
  }
  .line4 {
    animation-delay: -0.8s;
  }
  .line5 {
    animation-delay: -0.7s;
  }
}
</style>
