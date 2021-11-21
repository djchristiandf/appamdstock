<template>
  <div class="itensmenu">
      <ul>
        <router-link to="/"><li><img src="./../assets/fullstack.png" width="100" alt="Course Fullstack"></li></router-link>
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/about"><li>About</li></router-link>
        <router-link to="/categories"><li>Categories</li></router-link>
        <router-link to="/products"><li>Products</li></router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .itensmenu{
    ul{
        display: flex;
        list-style: none;
        justify-content: space-around;
        align-items: center;
        li{
            margin-left: 1%;
            width: 100px;
        }
    }
  }
</style>