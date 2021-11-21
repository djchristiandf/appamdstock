<template>
  <div class="main">
    <h1>Update Products</h1>
    <div class="alert alert-success" v-if="ok">
      <h4>Success, updated form</h4>
    </div>
    <div v-else-if="error">{{ message }}</div>
    <div class="form" v-for="prod in products" :key="prod.id">
      <form>
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
          <input type="text" v-model="prod.price" class="ml-3" id="price">
        </div>
        <button v-on:click="updatedProduct(prod)" class="btn btn-warning">Atualizar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
  data(){
    return {
      id: this.$route.params.id,
      message: '',
      ok: false,
      error: false
    }
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions('products', ['findProductById', 'updateProductsAction']),
    async updatedProduct(prod){
      const update = {
        id: prod.id,
        name: prod.name,
        amount: prod.amount,
        price: prod.price
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
    this.findProductById(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
.main {
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
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