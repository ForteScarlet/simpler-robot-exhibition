<template>


  <n-grid x-gap="12" :cols="24">
    <n-gi span="4"/>
    <n-gi span="16">
      <div v-for="i in typeOfWork">
        <base-show-card-type v-bind="i"/>

        <n-grid x-gap="12" :cols="3">
          <base-show-card
              :author="{
              name: 'forte', avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1149159218&s=640'
            }"
              :work="{
              title: 'Simple-Robot', logo: 'src/assets/logo.png'
            }"
          />
          <base-show-card
              :author="{
                    name: 'ForteScarlet',
                    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1149159218&s=640',
                    website: 'http://forte.love'
                }"
              :work="{
                  title: 'Simple-Robot',
                  logo: 'src/assets/logo.png'
                }"
              :info="{
                summary: '这是一段项目介绍！！！！介绍介绍介绍介绍介绍介绍介绍介绍介绍' +
                 '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍' +
                  '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍' +
                  '介绍介绍介绍' +
                  '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍' +
                   '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
                   subSummary: '这里是收尾',
                foot: 'http://forte.love'
              }"
          />

        </n-grid>

        <template v-if="i.sub">
          <template v-for="(s,index) in i.sub">
            <base-show-card-type
                :name="s.name"
                :iid="s.iid"
                :type="s.type ? s.type : i.type"
                :pid="i.pid ? i.pid + '-' + i.iid : i.iid"
                :sub="s.sub ? s.sub : []"
                :items="s.items ? s.items : []"
            />
            sub-{{ index }}
          </template>
        </template>
      </div>
    </n-gi>
    <n-gi span="4"/>
  </n-grid>


  <!--<base-anchor-link-show />-->

  <!--<n-anchor :show-rail="true"-->
  <!--          :show-background="true"-->
  <!--          :offset-target="() => $refs.showIndexList"-->
  <!--          :ignore-gap="true">-->
  <!--  <n-anchor-link-->
  <!--      v-for="t in typeOfWork"-->
  <!--      :title="t.name" href="#tag-official">-->
  <!--  </n-anchor-link>-->

  <!--</n-anchor>-->

  <!--<n-space vertical size="large" align="stretch">-->
  <!--  <n-layout embedded :native-scrollbar="false" position="absolute">-->
  <!--    <n-layout-header style="height: 64px; padding: 24px;"-->
  <!--                     bordered>-->
  <!--      作品展示区了啦！-->
  <!--    </n-layout-header>-->

  <!--    <n-layout has-sider position="absolute" style="top: 64px; bottom: 32px;">-->
  <!--      &lt;!&ndash; context &ndash;&gt;-->
  <!--      <n-layout :native-scrollbar="false" content-style="padding: 24px;">-->
  <!--        <show-index ref="showIndexList"/>-->
  <!--      </n-layout>-->
  <!--      <n-layout-sider-->
  <!--          @update:collapsed="(b) => console.log('on ' + b)"-->
  <!--          content-style="padding: 12px;"-->
  <!--      >-->
  <!--        <n-anchor :show-rail="true"-->
  <!--                  :show-background="true"-->
  <!--                  :offset-target="() => $refs.showIndexList"-->
  <!--                  :ignore-gap="true"-->
  <!--        >-->
  <!--          <n-anchor-link title="官方" href="#tag-official"/>-->
  <!--          <n-anchor-link title="第三方" href="#tag-third-part">-->
  <!--            <n-anchor-link title="应用" href="#tag-third-part-program"/>-->
  <!--          </n-anchor-link>-->
  <!--        </n-anchor>-->
  <!--      </n-layout-sider>-->
  <!--    </n-layout>-->
  <!--  </n-layout>-->
  <!--</n-space>-->


</template>

<script>
import ShowIndex from "./ShowIndex.vue";
import BaseShowCardType from "./components/BaseShowCardType.vue";
import BaseAnchorLinkShow from "./components/BaseAnchorLinkShow.vue";
import IconAndName from "./components/IconAndName.vue";
import BaseShowCard from "./components/BaseShowCard.vue";

export default {
  components: {IconAndName, BaseShowCard, BaseAnchorLinkShow, BaseShowCardType, ShowIndex},
  data() {
    return {
      typeOfWork: [
        {
          name: '官方',
          iid: 'official',
          type: 'info',
          sub: [
            {
              name: '核心',
              iid: 'core'
            },
            {
              name: '组件',
              iid: 'component'
            },
            {
              name: '其他',
              iid: 'other'
            }
          ]
        },
        {
          name: '第三方',
          iid: 'third-part',
          type: 'success',
          sub: [
            {
              name: '应用',
              iid: 'program'
            }
          ]
        }
      ]
    }
  },
  provide() {
    return {'typeOfWork': this.typeOfWork}
  }
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
