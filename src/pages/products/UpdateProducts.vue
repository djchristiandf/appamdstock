<template>
  <div class="main">
    <h1>Update Products</h1>
    <div class="alert alert-success" v-if="ok">
      <h4>Success, updated form</h4>
    </div>
    <div v-else-if="error">{{ message }}</div>
    <div class="form" v-for="prod in products" :key="prod.id">
      
        <div class="row">
          <label for="name">Descrição</label>
          <input type="text" v-model="prod.name" class="ml-3" id="name">
        </div>
        <div class="row">
          <label for="amount">Quantidade</label>
          <input type="text" v-model="prod.amount" class="ml-3" id="amount">
        </div>
        <div class="row">
          <label for="price">Preço</label> 
          <input type="text" v-model.lazy="prod.price" v-money="money" class="ml-3" id="price">
        </div>
        <div class="row mt-3">
          <select id="categories" v-model="prod.category.id">
            <option value="0">Categories</option>    
            <option v-for="category in categories.categories"
                    :key="category.id"
                    v-bind:value="category.id">
              {{ category.name}}
            </option>        
            <!-- <option value="1">Eletronics</option>
            <option value="2">Domestic</option>
            <option value="3">Automotive</option>
            <option value="4">Industry</option>
            <option value="5">Farm</option> -->
          </select>
        </div> 
        <button v-on:click="updatedProduct(prod)" class="btn btn-warning">Atualizar</button>
      
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex';
import { VMoney } from 'v-money';
export default {
  directives: {money: VMoney},
  data(){
    return {
      id: this.$route.params.id,
      message: '',
      ok: false,
      error: false,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false
      }
    }
  },
  computed: {
    ...mapState(['categories', 'products']),
    
  },
  methods: {
    ...mapActions('categories', ['getCategoriesAction']),
    ...mapActions('products', ['findProductById', 'updateProductsAction']),
    async updatedProduct(prod){
      const update = {
        id: prod.id,
        name: prod.name,
        amount: prod.amount,
        price: prod.price,
        category: { id: prod.category.id}
      }
      try {
        await this.updateProductsAction(update)
        this.ok = true
        await this.findProductById(prod.id)
      }catch (err){
        err.data ? this.message = err.data.message : this.message = 'Problems try update form'
        this.error = true
      }
    }
  },
  created() {
    this.findProductById(this.$route.params.id),
    this.getCategoriesAction()
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px gray;
    border-radius: 7%;
    width: 35%;
    padding: 1%;
    .row {
      padding: 1.4%;
      display: flex;
      align-items: center;
      input {
        border: none;
        border-bottom: 1px solid grey;
      }
      input:focus {
        outline: none;
      }
    }
  }
}
</style>