<template>
  <div class="topics_wrap">
    <c-loading v-if="loading" />
    <div v-else>
      <c-cell v-for="(item,index) in topicsList" :key="index" :article="item"/>
    </div>
    <div class="load_more" v-show="topicsList.length>=20&&showLoadMore" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="5">
      <c-loading :height="45"/>
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
    return {
      busy: false
    }
  },
  computed: {
    ...mapState(['loading', 'topicsList', 'tab', 'page', 'showLoadMore'])
  },
  methods: {
    loadMore: function () {
      this.busy = true
      setTimeout(() => {
        this.$store.dispatch('loadMore', { page: this.page, tab: this.tab })
        this.busy = false
      }, 1000)
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.topics_wrap{
  margin-top: 280px;
}
.load_more{
  font-size: 26px;
  color: #b4b4b4;
  text-align: center;
}
</style>
