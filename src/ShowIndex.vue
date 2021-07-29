<template>

  <n-layout embedded content-style="padding: 24px">

    <div id="tag-official">
      <n-divider title-placement="center">
        <n-tag type="info" round> Official</n-tag>
      </n-divider>

      <n-grid x-gap="14" y-gap="20" cols="4">
        <n-gi v-for="i in 2">
          <BaseShowCard/>
        </n-gi>
      </n-grid>
    </div>

    <div id="tag-third-part">
      <n-divider title-placement="center">
        <n-tag type="info" round> 第三方</n-tag>
      </n-divider>
      <div id="tag-third-part-program">
        <n-divider title-plaecement="center">
          <n-tag type="info" round> 应用</n-tag>
        </n-divider>
        <n-grid x-gap="14" y-gap="20" cols="4">
          <n-gi v-for="i in 2">
            <BaseShowCard/>
          </n-gi>
        </n-grid>
      </div>
    </div>
  </n-layout>

</template>

<script>
import BaseShowCard from "./components/showCard/BaseShowCard.vue";
export default {
  name: "ShowIndex",
  components: {BaseShowCard}
}
</script>

<style scoped>

</style>