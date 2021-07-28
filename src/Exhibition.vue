<!--suppress HttpUrlsUsage -->
<template>
  <n-grid x-gap="12" :cols="24" class="exhibition">
    <n-gi span="2"/>
    <n-gi span="20">
      <div v-for="i in typeOfWork">
        <base-show-card-type v-bind="i"/>
        <n-grid x-gap="50" cols="3 s:1 m:1 l:2 xl:3 2xl:3" responsive="screen">
                    <!--<base-show-card-->
                    <!--    :author="{-->
                    <!--    name: 'forte', avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1149159218&s=640'-->
                    <!--  }"-->
                    <!--    :work="{-->
                    <!--    title: 'Simple-Robot', logo: '/simbot-logo.png'-->
                    <!--  }"-->
                    <!--/>-->
                    <!--<base-show-card-->
                    <!--    :author="{-->
                    <!--          name: 'ForteScarlet',-->
                    <!--          avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1149159218&s=640',-->
                    <!--          website: 'http://forte.love'-->
                    <!--      }"-->
                    <!--    :work="{-->
                    <!--        title: 'Simple-Robot',-->
                    <!--        logo: '/simbot-logo.png'-->
                    <!--      }"-->
                    <!--    :info="{-->
                    <!--      summary: '这是一段项目介绍！！！！介绍介绍介绍介绍介绍介绍介绍介绍介绍' +-->
                    <!--       '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍' +-->
                    <!--        '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍' +-->
                    <!--        '介绍介绍介绍' +-->
                    <!--        '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍' +-->
                    <!--         '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',-->
                    <!--         subSummary: '这里是收尾',-->
                    <!--      foot: 'http://forte.love'-->
                    <!--    }"-->
                    <!--/>-->
        </n-grid>

        <template v-if="i.sub && allWorks[i.iid]">
          <template v-for="s in i.sub">
            <template v-if="allWorks[i.iid][s.iid]">
              <base-show-card-type
                  :name="s.name"
                  :iid="s.iid"
                  :type="s.type ? s.type : i.type"
                  :pid="i.pid ? i.pid + '-' + i.iid : i.iid"
                  :sub="s.sub ? s.sub : []"
                  :items="s.items ? s.items : []"
              />
              <n-grid x-gap="50" cols="3 s:1 m:1 l:2 xl:3 2xl:3" responsive="screen">
                <base-show-card
                    v-for="w in allWorks[i.iid][s.iid]"
                    v-bind="w"
                />
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
import ShowIndex from "./ShowIndex.vue";
import BaseShowCardType from "./components/BaseShowCardType.vue";
import BaseAnchorLinkShow from "./components/BaseAnchorLinkShow.vue";
import IconAndName from "./components/IconAndName.vue";
import BaseShowCard from "./components/BaseShowCard.vue";

export default {
  components: {IconAndName, BaseShowCard, BaseAnchorLinkShow, BaseShowCardType, ShowIndex},
  data() {
    return {
      // 二级结构
      typeOfWork: [
        {
          name: '官方',
          iid: 'official',
          type: 'info',
          strong: true,
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
          strong: true,
          sub: [
            {
              name: '应用',
              iid: 'program'
            },
            {
              name: '框架',
              iid: 'frame'
            }
          ]
        }
      ],
    }
  },

  props: ['works'],

  computed: {
    allWorks() {
      /*
          {
            'official': {
              'core': [],
              'component': [],
            },
            'third-part': {
                 'program':
            }
          }
       */

      const result = {}
      for (let v of this.typeOfWork) {
        result[v.iid] = {}
      }


      for (const work of this.works) {
        const pType = work.type[0]
        const sType = work.type[1]
        let data = result[pType]
        let arrayData
        if (!data) {
          data = {}
          data[sType] = arrayData
          result[pType] = data
        } else {
          let dataSType = data[sType]
          if (!dataSType) {
            arrayData = []
            data[sType] = arrayData
          } else {
            arrayData = dataSType
          }
        }

        arrayData.push(work)


      }
      return result
    }

  },

  provide() {
    return {'typeOfWork': this.typeOfWork}
  }
}

</script>

<style scoped>
.exhibition {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
