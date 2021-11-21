<template>
  <div>
      <div class="categories">
        <h1>Categories</h1>
        <div class="list" v-for="category in categories.categories" :key="category.id">
          <div class="categories">
          <div calss="dados">{{ category.id}}</div>
          <div calss="dados">{{ category.name}}</div>
          </div>
          <div class="row" v-for="prod in products.products" :key="prod.id">

            {{ prod.name }}
          </div>
        </div>
      </div>
<!--      <div class="vuex">
          Total: {{ count }}
          <button v-on:click="increments">+</button>
      </div>-->
      <hr>

<!--      <div class="products">
        {{ products }}
        <input v-model="produtos" type="text">    
        <button v-on:click="addProdutos(produtos)" class="btn btn-primary mt-4">+</button>
      </div>-->
  </div>
</template>

<script>
//import axios from 'axios';
import { mapState, mapActions } from 'vuex';
//import {getProductsAction} from "@/pages/products/store/actions";
export default {
  data(){
    return {
      productId: ''
    }
  },
  methods:{
    /*getCategories(){
      axios.get('http://localhost:8090/categories').then(resp => {
        this.categories = resp.data   
      })
    },*/

    ...mapActions('categories', ['getCategoriesAction']),
    ...mapActions('products', ['getProductsAction'])
  },
  created(){
    this.getCategoriesAction(), this.getProductsAction()
  },
  computed:{
    ...mapState(['categories', 'products'])
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/colors.scss';
  .categories{
    align-items: center;
    text-align: center;
    .list{
      align-items: center;
      padding: 1%;
      display:flex;
      justify-content: center;
      .dados{
        padding: 0.7%; 
      }
    }
    .categories{
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: $light;
    }
    .row{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .vuex{
    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-weight: 900;
    align-items: center;
  }
  .products{
    display: flex;
    flex-direction: column;
    align-items: center;
      input{
        border-bottom: solid 1px black;
      }
  }
</style>