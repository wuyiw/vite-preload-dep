<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <router-link to="/">to a</router-link>
  <br />
  <router-link to="/b">to b</router-link>
  <router-view></router-view>
</template>

<script setup>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
