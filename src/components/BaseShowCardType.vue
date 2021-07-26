<template>
  <div :id="sid">
    <n-divider title-placement="center">
      <n-tag :type="type" round>{{ name }}</n-tag>
    </n-divider>
    <template v-if="items">
      <base-show-card v-for="i in items"
                      v-bind="i"
      />
    </template>
    <!--<template v-if="sub">-->
    <!--  <base-show-card-type v-for="s in sub"-->
    <!--                       :name="s.name"-->
    <!--                       :iid="s.iid"-->
    <!--                       :type="s.type ? s.type : type"-->
    <!--                       :pid="sid"-->
    <!--                       :sub="s.sub ? s.sub : []"-->
    <!--                       :items="s.items ? s.items : []"-->
    <!--  />-->
    <!--</template>-->
  </div>


</template>

<script>
import BaseShowCard from "./BaseShowCard.vue";

/**
 * 卡片展示时的属性列表
 */
export default {
  name: "BaseShowCardType",
  components: {BaseShowCard},
  props: {
    name: String,
    iid: String,
    pid: String,
    sub: Array,
    items: Array,
    type: String
  },
  data() {
    return {
      sid: this.pid ? this.pid + '-' + this.iid : this.iid
    }
  }
}


</script>

<style scoped>

</style>