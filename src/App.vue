<template>
  <div id="app">
    <div id="nav">
     <MenuLogin />      
     <Menu />
     <hr>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import Menu from './components/Menu' 
  import MenuLogin from './components/MenuLogin'
  export default{
    components: {
      Menu
    }
  }
</script>
<style lang="scss">
@import 'scss/colors.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  .login{
    width: 100%;
    background-color: $light;
    .buttons{
      display: flex;
      justify-content: flex-end;
      margin-right: 4%;
      .link{
        text-decoration: none;
      }
    }
  }
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
