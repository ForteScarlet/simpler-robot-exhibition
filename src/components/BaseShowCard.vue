<template>
  <div style="position:relative; overflow: hidden; border-radius: 1% 1% 1% 1%">
    <div class="card-bg">
    </div>
    <n-card hoverable
            :title="work.title"
            class="card-bg-sub"
    >
      <!-- user head -->
      <IconAndName :icon="author.avatar" :name="author.name ? author.name : '无名的勇者'" :website="author.website"/>
      <p>
        <n-ellipsis line-clamp="4" :tooltip="{
        'width': 'trigger'
      }"
        >
          {{ info.summary }}
        </n-ellipsis>
      </p>

      <!-- logo -->
      <template #cover>
        <br/>
        <n-avatar
            class="no-drag"
            style="box-shadow: 4px 4px 10px rgba(91,85,85,0.18);"
            circle
            size="45"
            :src="work.logo"
        />
        <!-- src="https://q1.qlogo.cn/g?b=qq&nk=2257290268&s=100" -->
      </template>

      <template #header>
        {{ work.title }}
      </template>

      <!--<template #header-extra>-->
      <!--  header-extra!-->
      <!--</template>-->

      <template #footer>
        <n-ellipsis line-clamp="4">
          {{ info.subSummary }}
        </n-ellipsis>
      </template>

      <template #action>
        {{ info.foot }}
      </template>
    </n-card>
  </div>

</template>

<script>
import IconAndName from "./IconAndName.vue";

/**
 * 用于展示的作品卡片
 */
export default {
  name: "BaseShowCard",
  components: {IconAndName},
  props: {
    author: Author,
    work: Work,
    info: {
      'type': Info,
      default: {
        'summary': '保持神秘感也是一种自我介绍',
        'subSummary': '',
        'foot': 'foot?'
      }
    },
  }
}

/**
 * author
 * @param name : String
 * @param avatar : String
 * @param website : String
 * @constructor
 */
function Author(name, avatar, website) {
  this.name = name
  this.avatar = avatar
  this.website = website
}

/**
 *
 * @param title : String
 * @param logo : String
 * @constructor
 */
function Work(title, logo) {
  this.title = title
  this.logo = logo
}

/**
 *
 * @param summary
 * @param foot
 * @constructor
 */
function Info(summary, subSummary, foot) {
  this.summary = summary
  this.subSummary = subSummary
  this.foot = foot
}

</script>


<style scoped>
.card-bg {
}

/*.head-bg {*/
/*  background-color: rgba(145, 239, 236, 0.45);*/
/*}*/

.card-bg {
  height: 100%;
  width: 100%;
  position: absolute;
  filter: blur(3px);
  background: url('https://q1.qlogo.cn/g?b=qq&nk=1149159218&s=640') no-repeat center;;
}

.card-bg-sub {
  height: 100%;
  background: rgba(255, 255, 255, 0.85);
}

.no-drag {
  -webkit-user-drag: none;
}

</style>