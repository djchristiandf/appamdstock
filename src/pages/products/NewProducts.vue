<template>
  <div class="main">
    <h1>Register Products</h1>
    <div class="form">
      <form>
        <div class="row">
          <label for="name">Descrição</label>
          <input type="text" v-model="form.name" class="ml-3" id="name">
        </div>
        <div class="row">
          <label for="amount">Quantidade</label>
          <input type="text" v-model="form.amount" class="ml-3" id="amount">
        </div>
        <div class="row2">
          <label for="price">Preço</label>
          <input type="text" v-model="price" v-money="money" class="ml-2" id="price">
        </div>
        <div class="row mt-3">
          <select id="categories" v-model="form.category">
            <option value="0">Category</option>
            <option value="1">Eletronics</option>
            <option value="2">Domestic</option>
            <option value="3">Automotive</option>
            <option value="4">Industry</option>
            <option value="5">Farm</option>
          </select>
        </div>
        <button v-on:click="addProduct" class="btn btn-primary">Salvar</button>
      </form>
    </div>
  </div>

</template>

<script>
import { mapActions} from "vuex";
import { VMoney } from 'v-money';
export default {
  directives: {money: VMoney},
  data(){
    return {
      form:{
        name:'',
        amount: '',
        category:''
      },
      price: 0,
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
  methods:{
    ...mapActions('products', ['addProductsAction']),
    addProduct(add){
      this.price = this.price.replace(/\./g, "");
      this.price = this.price.slice(3).replace(",", ".");
      //console.log(this.price)
      add = {
        name: this.form.name,
        amount: this.form.amount,
        price: this.price,
        category: { id: parseInt(this.form.category)}
      };
      //console.log(add)
      this.addProductsAction(add)
      this.form.name = ''
      this.form.amount = ''
      this.price = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.main {

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px gray;
    border-radius: 7%;
    width: 35%;
    padding: 1%;
    // padding-right: 0.5%;
    .row {
      width: 100%;
      padding: 1%;
      display: flex;
      align-items: baseline;
      justify-content: flex-start;
      label {
        align-items: flex-start;
        text-align: right;
        width: 25%;
      }
      input {
        width: 69%;
        border: none;
        border-bottom: 1px solid grey;
      }
      input:focus {
        outline: none;
      }
      #categories {
        width: 40%;
        border: none;
        background-color: white;
        border-bottom: 1px solid grey;
        margin-left: 4%;
        align-items: flex-end;

        option{
          direction: rtl;
        }
      }
      #categories:focus {
        outline: none;
      }
    }
    .row2 {
      width: 100%;
      padding: 0.5%;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-left: 10%;
      label {
        align-items: flex-start;
        text-align: right;
        width: 11%;
      }
      input {
        width: 28%;
        border: none;
        border-bottom: 1px solid grey;
      }
      input:focus {
        outline: none;
      }
      #categories {
        width: 70%;
        border: none;
        background-color: white;
        border-bottom: 1px solid grey;
        margin-left: 7%;
        option{
          direction: rtl;
        }
      }
      #categories:focus {
        outline: none;
      }
    }
  }
}
</style>