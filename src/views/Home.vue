<template>
  <div>
    <c-header/>
    <c-list/>
  </div>
</template>

<script>
import cHeader from '../components/Header/Header'
import cList from '../components/TopicsList/TopicsList'
import { mapState } from 'vuex'
export default {
  components: {
    cHeader,
    cList
  },
  data () {
    return {
      busy: false
    }
  },
  computed: {
    ...mapState(['tab', 'current'])
  },
  methods: {
  },
  mounted () {
    // 首次加载到首页，获取此数据
    this.$store.dispatch('firstGetTopics', { tab: this.tab, idx: this.current })
  }
}
</script>
<style lang="scss" scoped>

</style>
