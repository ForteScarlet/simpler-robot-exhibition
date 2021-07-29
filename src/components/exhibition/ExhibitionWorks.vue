<!--suppress HttpUrlsUsage -->
<template>
  <n-grid x-gap="12" y-gap="12" :cols="24">
    <n-gi span="2"/>
    <n-gi span="20">
      <div v-for="i in typeOfWork">
        <base-show-card-type v-bind="i" :id="i.tid"/>
        <template v-if="i.sub && works[i.iid]">
          <template v-for="s in i.sub">
            <template v-if="works[i.iid][s.iid]">
              <base-show-card-type
                  :id="s.tid"
                  :name="s.name"
                  :iid="s.iid"
                  :type="s.type ? s.type : i.type"
                  :pid="i.pid ? i.pid + '-' + i.iid : i.iid"
                  :sub="s.sub ? s.sub : []"
                  :items="s.items ? s.items : []"
                  :sid="s.tid"
              />
              <n-grid x-gap="50" cols="1 s:1 m:2 l:3 xl:3 2xl:5" responsive="screen">
                <n-gi v-for="w in works[i.iid][s.iid]">
                  <base-show-card v-bind="w" class="exhibition"/>
                </n-gi>
                <!--<n-gi :suffix="i.addAble" v-if="i.addAble" #="{ overflow }">-->
                <!--  <n-card title="卡片" class="exhibition"> 卡片内容 {{-->
                <!--      overflow ? '存在溢出' : '不存在溢出'-->
                <!--    }}-->
                <!--  </n-card>-->
                <!--</n-gi>-->
              </n-grid>
            </template>
          </template>
        </template>
      </div>
    </n-gi>
    <n-gi span="2"/>
  </n-grid>
</template>

<script>
import BaseShowCardType from "../showCard/BaseShowCardType.vue";
import BaseAnchorLinkShow from "../showCard/BaseAnchorLinkShow.vue";
import IconAndName from "../showCard/IconAndName.vue";
import BaseShowCard from "../showCard/BaseShowCard.vue";
// import typeOfWork from "../../assets/typeOfWork.json"

export default {
  components: {IconAndName, BaseShowCard, BaseAnchorLinkShow, BaseShowCardType},
  props: ['works', 'typeOfWork'],
}

</script>

<style scoped>
.exhibition {
  text-align: center;
  margin-bottom: 20px;
}


</style>
