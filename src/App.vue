<template>
  <div id="app">
    <RobotBuilder msg="Welcome to the Robot Builder"/>
  </div>
</template>

<script>
import RobotBuilder from './components/RobotBuilder.vue';

export default {
  name: 'app',
  components: {
    RobotBuilder,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
