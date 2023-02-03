<template>
  <section class="cart-sect">
    <p class="err" v-if="getData.length === 0">Cart is empty...</p>
    <div
      class="cards"
      :style="getData.length !== 0 ? `display: flex;` : `display: none;`"
    >
      <CartItems
        v-for="(item, index) in getData"
        :key="index"
        :data="item"
        @getId="deleteItem"
      />
    </div>
    <div class="balance">
      <p :style="getData.length !== 0 ? `display: flex;` : `display: none;`">
        Full balance: ₹{{ getBalance }}
      </p>
    </div>
  </section>
</template>

<script>
import CartItems from "../components/CartItems.vue";
import store from "../store/index";
export default {
  components: {
    CartItems,
  },
  data() {
    return {
      products: store,
    };
  },
  computed: {
    getData() {
      return store.getters.getProducts;
    },
    getBalance() {
      let balance = 0;
      this.getData.forEach((e) => {
        balance += e.price;
      });
      return balance;
    },
  },

  methods: {
    deleteItem(id) {
      store.commit('removeProduct', id)
      localStorage.setItem('cartItems', JSON.stringify(store.state.cartProducts))
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-sect {
  margin-top: 50px;
  display: flex;
  gap: 80px;
}
.err {
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  margin: auto;
}

.balance {
  p {
    font-size: 55px;
    font-weight: 600;
  }
}


@media(max-width: 816px){
  .cart-sect{
    flex-direction: column;
  }

  .balance{
    p{
      text-align: center;
      font-size: 35px;
    }
  }
}



</style>
