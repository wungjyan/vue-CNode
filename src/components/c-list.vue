<template>
  <div class="topics-wrap">
    <c-loading v-if="loading" />
    <div v-else>
      <div
        v-for="(item,index) in topicsList"
        :key="index"
      >{{item.title}}</div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import cLoading from './c-loading'
export default {
  components: {
    cLoading
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['loading', 'topicsList'])
  },
  methods: {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
</style>
