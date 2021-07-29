<template>
  <a :href="website" target="_blank">
    <div class="box">
      <div class="line">
        <div class="picbox">
          <img :src="icon" alt="name" class="pic" draggable="false">
        </div>
        <p class="title"> {{ name }} </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "IconAndName",
  props: {
    'icon': String,
    'name': String,
    'website': String
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
 text-decoration: none;
  color: black;
}
a:visited {
  color: black;
}
a:hover {
  text-decoration: none;
}

.box {
  /*width: 300px;*/
  /*height: 300px;*/
  /*border: 1px solid #ccc;*/
  /*border-radius: 4px;*/
  position: relative;
}

.line {
  display: flex;
}

.picbox {
  width: 53%;
  /*height: 300px;*/
  position: absolute;
  left: 0;
  transition: 1s;
  z-index: 10;
  background: white;
}

.pic {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  border-radius: 50%;
}

.title {
  height: 45%;
  line-height: 40px;
  opacity: 0;
  transition: 1s;
  position: relative;
}

.box:hover .picbox {
  left: -10%;
}

.box:hover .title {
  margin-left: 45%;
  opacity: 1;
}
</style>