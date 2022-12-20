<template>
   <div class="app">
      <pMainWrapper />
   </div>
</template>

<script>
import pMainWrapper from "@/components/p-main-wrapper"

export default {

  name: 'App',
  components: {
   pMainWrapper
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
}
.app {
   display: flex;
}
ul {
   padding-inline-start: 0;
}
li {
   list-style-type: none;
}
body {
   margin: 0;
}
</style>
