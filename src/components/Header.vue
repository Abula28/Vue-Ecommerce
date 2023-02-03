<template>
  <header>
    <div class="nav">
      <router-link to="/cart">
      <div class="cart">
        <div :class="{'active' : active}" class="circle"><p class="cartCount">{{ productLen }}</p></div>
      <h3 class="logo"><strong>shop</strong>cart</h3>
      </div>
    </router-link>

      <div class="buttons">
        <div class="signIn">
          <img src="../Img/sign-img.png" alt="sign-img" />

          <p>Sign in</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import store from '../store/index'
export default{
  data(){
    return{
      active: false,
    }
  },
  computed:{
    productLen(){
      return store.getters.getProducts.length
    }
  },
  watch:{
    productLen: function(){
      this.active = true
      setTimeout(() => {
        this.active = false
      }, 1000);
    }
  }
}
</script>

<style lang="scss">
header {
  padding: 40px 200px 0px;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #808080;
  padding-bottom: 20px;
  h3 {
    font-size: 32px;
    line-height: 48px;
    font-weight: 300;
    color: black;
    strong {
      font-weight: 700;
    }

    
  }

  

  .cart{
    position: relative;

    .circle{
      position: absolute;
      top: 0px;
      right: -25px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgb(255, 0, 64);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .5s;
      p{
        color: white;
        font-size: 15px;
        font-weight: 500;
      }
    }

    .circle.active{
      transform: scale(1.5);
    }
  }

  

  .signIn {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin-left: 10px;
    }
  }
}
</style>
