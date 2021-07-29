<template>
  <n-anchor
      affix
      :offset-top="20"
      :show-rail="true"
      :show-background="true"
      ignore-gap>
    <n-anchor-link
        v-for="t in typeOfWork"
        :title="t.name" :href="'#' + t.tid">
      <template v-if="t.sub">
        <n-anchor-link v-for="st in t.sub"
                       :title="st.name"
                       :href="'#' + st.tid"
        />
      </template>
    </n-anchor-link>
  </n-anchor>
</template>

<script>
export default {
  name: "BaseAnchorLinkShow",
  props: ['typeOfWork', 'offset-target']
}
</script>

<style scoped>

</style>