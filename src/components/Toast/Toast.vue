<template>
    <div class="toast" v-if="showToast">
      {{msg}}
    </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      showToast: false,
      msg: ''
    }
  },
  computed: {},
  methods: {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
  .toast{
    z-index: 999;
    position: fixed;
    left: 50%;
    top: 50%;
    box-sizing: border-box;
    max-width: 80%;
    height: 80px;
    transform: translateX(-50%);
    padding: 20px;
    border: 1px solid red;
    background:#fff;
    color: red;
    text-align: center;
    font-size: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
