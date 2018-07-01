<template>
  <div id="app">
      <div>
          <app-header></app-header>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
import HeaderDiv from './components/HelloWorld'
export default {
  components: {
    appHeader: HeaderDiv
  }
}
</script>

<style>

</style>
