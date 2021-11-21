<template>
  <div class="principal">
    <div class="principal">
      <div class="topo">
        <h1>Products</h1>
        <button class="btn btn-success"><router-link class="link" to="/products-register">Add Product</router-link></button>
      </div>
      <div>
        <ul>
          <li>
            <div class="dados" id="id"><strong>Id</strong></div>
            <div class="dados" id="name"><strong>Descrição</strong></div>
            <div class="dados" id="amount"><strong>Quantidade</strong></div>
            <div class="dados" id="price"><strong>Preço</strong></div>
            <div class="dados" id="action"><strong>Action</strong></div>
          </li>
        </ul>
      </div>
      <div v-for="dado in products.products" :key="dado.id">
        <ul>
          <li>
            <div class="dados" id="id2">{{ dado.id }}</div>
            <div class="dados" id="name2">{{ dado.name }}</div>
            <div class="dados" id="amount2">{{ dado.amount }}</div>
            <div class="dados" id="price2">{{ dinheiro(dado.price) }}</div>
            <div class="dados" id="action2">
              <router-link v-bind:to="{ name : 'Products-update', params: { id: dado.id}}">
                <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
              </router-link>
              <button v-on:click="deleteProduct(dado.id)" class="btn btn-danger ml-3">
                <i class="far fa-trash-alt"></i></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
      
  </div>
</template>

<script>
// import dados from '../../data/data.json';
import { mapState, mapActions } from 'vuex'
export default {
  data(){
    return {

    }
  },
  methods:{
    ...mapActions('products', ['getProductsAction', 'deleteProductsAction']),
    dinheiroconverte(valor){
      valor =  valor.toFixed(2)
      return "R$ " + valor
    },
    dinheiro(valor) {
      if (valor) {
        let valorFinal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(valor)
        return valorFinal;
      } else {
        return "R$ -----";
      }
    },
    async deleteProduct(id){
      try {
        await this.deleteProductsAction(id)
        //this.getProductsAction()
        this.$router.go()
      }
      catch(err){
        alert('Not possible delete: ' + err)
      }
    }
  },
  computed: {
    ...mapState(['products'])
  },
  created() {
    this.getProductsAction()
  }
}
</script>

<style lang="scss" scoped>
  .principal{
    padding: 1%;
    padding-top: 0.1%;
    margin-top: -1%;
    .topo {
      display: flex;
      justify-content: space-around;
      padding: 2.1%;
      .btn {
        max-height: 50px;
        .link {
          text-decoration: none;
          color: white;
        }
      }
    }
    ul {
    list-style: none;
    li {
      display: flex;
      justify-content: space-around;
      border: solid 1px grey;
      padding: 1%;
    }
    .dados {
      padding: 0.7%;
      border-right: solid 1px grey;
      border-left: solid 1px grey;
    }
    #id {
      min-width: 10%;
    }

    #name {
      min-width: 35%;
      color: blue;
    }
    #descricao {
      min-width: 35%;
    }
    #amount {
      min-width: 10%;
    }
    #price {
      min-width: 14%;
    }
  }
  }
</style>