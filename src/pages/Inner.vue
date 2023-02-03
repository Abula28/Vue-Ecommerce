<template>
  <section class="inner">
    <div class="main_inner">
      <img :src="currentData1[0].img" alt="" />
      <div class="texts">
        <h1 class="header">{{ currentData1[0].title }}</h1>

        <p class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          gravida varius nisi a dictum. Morbi posuere orci pharetra molestie
          ornare
        </p>

        <div class="prices">
          <p class="price">
            <span>₹</span>{{ this.currentData1[0].price * this.counter }}
          </p>
          <p class="discount">{{ currentData1[0].discount }}</p>
        </div>
      </div>

      <div class="btns">
        <button class="dec" :disabled="disableBtn" @click="dec">-</button>
        <p class="counter">{{ counter }}</p>
        <button class="inc" :disabled="disableBtn" @click="inc">+</button>
      </div>

      <button class="cart" :disabled="disableBtn"  @click="addItem">Add to cart</button>
    </div>
  </section>
</template>

<script>
import prData1 from "../products1.json";
import store from '../store/index'
export default {
  data() {
    return {
      currentData1: prData1,
      counter: 1,
      addedItems: null,
      // balance: this.currentData1[0].price * this.counter,
      disableBtn: false,
    };
  },

  methods: {
    inc() {
      this.counter++;
    },
    dec() {
      this.counter--;
      if (this.counter <= 1) {
        this.counter = 1;
      }
    },
    addItem(){
      this.addedItems = {
        id: this.currentData1[0].id,
        title: this.currentData1[0].title,
        img: this.currentData1[0].img,
        price: this.currentData1[0].price,
        discount: this.currentData1[0].discount,
        amount: this.counter,
        price: this.currentData1[0].price * this.counter
      } 
      console.log(this.currentData1[0].img)

      store.commit('setProduct', this.addedItems)
      localStorage.setItem('cartItems', JSON.stringify(store.state.cartProducts))
      this.disableButton()
      
    },
    disableButton(){
      store.getters.getProducts.forEach((e) =>{
        if(e.id === this.currentData1[0].id){
          this.disableBtn = true;
        }
      })
    }
  },

  mounted() {
    this.currentData1 = prData1.filter(
      (el) => el.id === parseInt(this.$route.query.plan)
    );
    this.disableButton()
  },
};
</script>

<style lang="scss" scoped>
.inner {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  height: 100vh;
}

.main_inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-height: 650px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  button {
    padding: 5px 25px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    outline: none;
    color: cyan;
    background-color: #001f3f;
  }
}

.texts {
  .header {
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    margin: 10px 10px;
  }
  .desc {
    margin: 10px 10px;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
  }

  .prices {
    display: flex;
    justify-content: space-between;
    margin: 10px 10px;

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      &.discount {
        color: #ff3232;
      }
    }
  }
}

.cart {
  margin-bottom: 10px;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }
}

.btns {
  .counter {
    font-size: 25px;
    font-weight: 500;
  }
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px 0px;
}

</style>
