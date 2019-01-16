<template>
  <div class="topic_detail">
    <c-header/>
    <div class="content_wrap">
      <c-loading v-if="showLoading"/>
      <div v-else class="content">
        <div class="topic_header">
          <div class="title">
            <span v-if="topicDetail.top" class="put_top">置顶</span>
            <span v-if="topicDetail.good" class="put_good">精华</span>
          </div>
          <div class="changes"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import cLoading from '../components/Loading/Loading'
import cHeader from '../components/Header/Header'
export default {
  components: {
    cLoading,
    cHeader
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['showLoading', 'topicDetail'])
  },
  methods: {},
  mounted () {
    let id = this.$route.params.id
    this.$store.dispatch('getTopicDetail', id)
  }
}
</script>
<style lang="scss" scoped>
</style>
