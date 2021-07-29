<!--suppress HttpUrlsUsage -->
<template>

  <exhibition :works="works" />


</template>

<script>
import Exhibition from "./components/exhibition/Exhibition.vue";

export default {
  components: { Exhibition },
  data() {
      return {
        works: []
      }
    },
}

</script>

<style>
/*#app {*/
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/


</style>
