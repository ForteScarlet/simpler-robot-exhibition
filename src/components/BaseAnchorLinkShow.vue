<template>
  <n-anchor :show-rail="true"
            :show-background="true"
            :offset-target="() => $refs.showIndexList"
            :ignore-gap="true">
    <n-anchor-link
        v-for="t in typeOfWork"
        :title="t.name" :href="'#' + t.id">
    </n-anchor-link>

  </n-anchor>
</template>

<script>
export default {
  name: "BaseAnchorLinkShow",
  inject: ['typeOfWork']
}
</script>

<style scoped>

</style>