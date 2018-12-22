<template>
<div class="message">

</div>
</template>
<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },

  methods: {

  },

  created () {

  }
  ,onReachBottom () {
  }

}
</script>

<style  lang="less">
.message {
  background:  #EEEFF4;
  &-item {
    background: #ffffff;
    .top {
      display: flex;
      .left {
        .red  { width: 6px;height: 6px;background: #FF4444;}
      }
      
    }
  }
}
</style>
