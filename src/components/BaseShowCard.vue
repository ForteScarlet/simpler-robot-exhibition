<template>
  <n-card hoverable
  title="simpler-robot"
  >
    <!-- user head -->
    <n-avatar
        circle
        size="small"
        src="https://q1.qlogo.cn/g?b=qq&nk=2257290268&s=100"
    /> ForteScarlet
    <p></p>
    这里是正文

    <!-- logo -->
    <template #cover>
      <n-avatar
          circle
          size="50"
          src="https://q1.qlogo.cn/g?b=qq&nk=1149159218&s=100"
      />
    </template>

    <template #header>
      Simple-robot
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

}
</script>

<style scoped>

</style>