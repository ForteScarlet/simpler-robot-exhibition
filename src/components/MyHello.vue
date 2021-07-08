<template>
  <h1>{{ name }}</h1>
  <p>age: {{age}}</p>
</template>

<script>
export default {
  name: "MyHello",
  props: {
    name: String
  },
  data() {
    return {
      age: 20
    }
  }
}
</script>
