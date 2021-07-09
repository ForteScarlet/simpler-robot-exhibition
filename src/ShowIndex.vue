<template>

  <n-layout embedded content-style="padding: 24px">

    <!-- :listen-to="() => $refs.container" -->
    <n-divider title-placement="center">
      <n-tag type="info" round> Official</n-tag>
    </n-divider>

    <n-anchor :show-rail="showRail" :show-background="showBackground">
      <n-anchor-link title="演示" href="#演示">
        <n-anchor-link title="基础用法" href="#basic" />
        <n-anchor-link title="忽略间隔" href="#ignore-gap" />
        <n-anchor-link title="固定" href="#affix" />
        <n-anchor-link title="滚动到" href="#scrollto" />
      </n-anchor-link>
      <n-anchor-link title="Props" href="#Props" />
    </n-anchor>

    <n-grid x-gap="14" y-gap="20" cols="4">
      <n-gi v-for="i in 40">
        <BaseShowCard/>
      </n-gi>
    </n-grid>

    <n-divider title-placement="center">
      <n-tag type="info" round> 第三方</n-tag>
    </n-divider>
    <n-divider title-plaecement="center">
      <n-tag type="info" round> 应用</n-tag>
    </n-divider>
    <n-grid x-gap="14" y-gap="20" cols="4">
      <n-gi v-for="i in 10">
        <BaseShowCard/>
      </n-gi>
    </n-grid>
  </n-layout>

</template>

<script>
import BaseShowCard from "./components/BaseShowCard.vue";
export default {
  name: "ShowIndex",
  components: {BaseShowCard}
}
</script>

<style scoped>

</style>