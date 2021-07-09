<template>
  <n-card hoverable
          :title="work.title"
  >
    <!-- user head -->
    <n-avatar
        circle
        size="small"
        :src="author.avatar"
    />
    <!-- src="https://q1.qlogo.cn/g?b=qq&nk=1149159218&s=100" -->
    {{ author.name ? author.name : '无名的勇者'}}

    <p>
      这里是正文
    </p>

    <!-- logo -->
    <template #cover>
      <n-avatar
          circle
          size="50"
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
      footer
    </template>

    <template #action>
      action!
    </template>


  </n-card>
</template>

<script>
/**
 * 用于展示的作品卡片
 */
export default {
  name: "BaseShowCard",
  props: {
    author: Author,
    work: Work,

  }
}

/**
 * author
 * @param name : String
 * @param avatar : String
 * @constructor
 */
function Author(name, avatar) {
  this.name = name
  this.avatar = avatar
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

</script>




<style scoped>

</style>