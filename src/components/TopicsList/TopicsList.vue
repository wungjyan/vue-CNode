<template>
  <div class="topics-wrap">
    <c-loading v-if="loading" />
    <div v-else>
      <c-cell v-for="(item,index) in topicsList" :key="index" :article="item"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import cLoading from '../Loading/Loading'
import cCell from './TopicsCell'
export default {
  components: {
    cLoading,
    cCell
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
