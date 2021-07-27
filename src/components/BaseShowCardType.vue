<template>
  <div :id="sid">
    <n-divider title-placement="center">
      <template v-if="strong">
        <n-tag :type="type" round size="large">
          <b>{{ name }}</b>
        </n-tag>
      </template>
      <template v-else>
        <n-tag :type="type" round>
          <span>{{ name }}</span>
        </n-tag>
      </template>
    </n-divider>
    <template v-if="items">
      <base-show-card v-for="i in items"
                      v-bind="i"
      />
    </template>
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
    type: String,
    strong: {
      type: Boolean,
      default: false
    }
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