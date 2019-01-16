<template>
  <div>
    <c-header/>
    <c-list/>
  </div>
</template>

<script>
import cHeader from '../components/Header/Header'
import cList from '../components/TopicsList/TopicsList'
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
  computed: {},
  methods: {
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>

</style>
