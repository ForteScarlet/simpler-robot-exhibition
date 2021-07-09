<template>
  <n-space vertical size="large" align="stretch">
    <n-layout embedded>
      <n-layout-header>
        <img alt="Vue logo" src="./assets/logo.png"/>
      </n-layout-header>
      <n-layout></n-layout>
      <n-layout>

        <n-layout-content>
          <show-index/>
        </n-layout-content>

      </n-layout>
    </n-layout>
  </n-space>


</template>

<script>
import ShowIndex from "./ShowIndex.vue";

export default {
  components: {ShowIndex}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
