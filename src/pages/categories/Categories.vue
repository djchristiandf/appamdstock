<template>
  <div>
      <div class="categories">
        <h1>Categories</h1>
        <div class="list" v-for="category in categories.categories" :key="category.id">
          <div class="categories">
          <div class="dados">{{ category.id}}</div>
          <div class="dados">
            <button class="btn" v-on:click="especificCategoryId(category.id)">
            {{ category.name}}
            </button>
          </div>
          </div>
          <div class="row" v-for="prod in products.products" :key="prod.id">
            <div v-if="prod.category" class="produtos">
              <ul v-if="prod.category.id == productcatId  && category.id == productcatId">
                <li>{{ prod.name }}</li>
              </ul>
            </div>                
          </div>
        </div>
      </div>
<!--      <div class="vuex">
          Total: {{ count }}
          <button v-on:click="increments">+</button>
      </div>-->
      

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
      productcatId: '',
    }
  },
  methods:{
    /*getCategories(){
      axios.get('http://localhost:8090/categories').then(resp => {
        this.categories = resp.data   
      })
    },*/
    
    ...mapActions('categories', ['getCategoriesAction']),
    ...mapActions('products', ['getProductsAction']),
    
    especificCategoryId(id){
      id != this.productcatId ? (this.productcatId = id) : (this.productcatId = '');
      //console.log(id);
    },    
  },
  created(){
    this.getCategoriesAction(), this.getProductsAction()
  },
  computed:{
    ...mapState(['categories', 'products']),
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/colors.scss';
  .categories{
    align-items: center;
    text-align: center;
    .list{
      width: 50%;
      margin-left: 22.5%;
      align-items: center;
      padding: 1%;
      display:flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid gray;
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
      width: 100%;
      .produtos{
        width: 100%;
        ul {
          width: 100%;
          display: flex;
          list-style: none;
          border-bottom: solid 1px gray;
        }
      }      
    }
  }

  .vuex{
    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-weight: 900;
    align-items: center;
    button {
      font-size: 32px;
    }
  }
  .produtos{
    display: flex;
    flex-direction: column;
    align-items: center;
      input{
        border-bottom: solid 1px black;
      }
  }
</style>