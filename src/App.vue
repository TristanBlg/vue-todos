<template>
  <div id="app" class="app">
    <div class="container"> 
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body{
  height: 100%;
}
html{
  font-size: 62.5%;
  font-size: .625em;
}
body{
  font-family: 'Open Sans', verdana, arial, sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.4em;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
.app{
  text-align: center;
  background-color: #47b784;
    background: linear-gradient(145deg,#59e0a2,#47b784);
  display: flex;
  padding: 10px;
  min-height: 100%;
}
.container{
  width: 100%;
  max-width: 480px;
  padding: 40px;
  background: #fff;
  border-radius: 6px;
  margin: auto;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, .3);
}
</style>
