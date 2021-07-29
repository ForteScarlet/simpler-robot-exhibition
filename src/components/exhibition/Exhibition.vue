<template>
  <n-space>
    <!--
    align="center" justify="center"
    style="position: absolute; height: 100%; width: 100%;"
  -->
    <n-layout position="absolute">
      <!-- content here -->
      <n-layout-content :native-scrollbar="false" position="absolute">
        <n-layout position="absolute" has-sider>
          <n-layout>
            <n-layout-content :native-scrollbar="false" ref="showIndexList" position="absolute">
              <!-- 展示区 -->
              <ExhibitionWorks :works="allWorks" :type-of-work="resolveTypeOfWork"/>
            </n-layout-content>
          </n-layout>
          <n-layout-sider content-style="padding: 10px">
            <BaseAnchorLinkShow :type-of-work="resolveTypeOfWork"
                                :offset-target="() => $refs.showIndexList"
            />
          </n-layout-sider>
        </n-layout>
      </n-layout-content>
    </n-layout>
  </n-space>


</template>

<script>
import ExhibitionWorks from "./ExhibitionWorks.vue";
import BaseAnchorLinkShow from "../showCard/BaseAnchorLinkShow.vue";
import typeOfWork from "../../assets/typeOfWork.json"

export default {
  props: ['works'],
  name: "Exhibition",
  components: {ExhibitionWorks, BaseAnchorLinkShow},
  data() {
    return {
      typeOfWork: typeOfWork
    }
  },

  computed: {
    resolveTypeOfWork() {
      const works = this.allWorks
      const result = []
      console.log(this.typeOfWork)
      for (let index = 0; index < this.typeOfWork.length; index++) {
        const i = this.typeOfWork[index]
        const item = JSON.parse(JSON.stringify(i))
        if (item.sub.length && works[item.iid]) {
          const subResult = []
          for (let sIndex = 0; sIndex < item.sub.length; sIndex++) {
            const s = item.sub[sIndex]
            console.log(s)
            if (works[item.iid][s.iid]) {
              subResult.push(s)
            }
          }
          // subs?
          if (subResult.length) {
            result.push(item)
            item.sub = subResult
          }
        }
      }

      // return this.typeOfWork
      return result
    },

    allWorks() {
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
  }
}
</script>
