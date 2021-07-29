<!--suppress HttpUrlsUsage -->
<template>

  <n-config-provider>
    <exhibition :works="works"/>
  </n-config-provider>


</template>

<script>
import Exhibition from "./components/exhibition/Exhibition.vue";

export default {
  components: {Exhibition},
  data() {
    return {
      works: []
    }
  },
}

</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*margin-top: 60px;*/
}


</style>
