<template>
  
  <div class="cart-item">
    
    <img :src="data.img" alt="fryver" @click="openInner" />

    <div class="box">
      <p class="title">{{data.title}}</p>
      <p class="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        gravida varius nisi a dictum. Morbi posuere orci pharetra molestie
        ornare
      </p>

      <p class="amount">{{data.amount}}x</p>

      <p class="price"><span>₹</span>{{data.price}}</p>

      <button class="delete" @click="sendId">delete</button>
    </div>
  </div>
</template>


<script>

export default{

  props:{
    data: {
      required: true,
      type: Object
    }
  },
  data(){
    return{
    }

  },

  methods:{
    openInner(){
      this.$router.push({path: 'inner', query: {plan: this.data.id}})
    },

    sendId(){
      this.$emit('getId', this.data.id)
    }
  }
}
</script>

<style lang="scss" scoped>


.cart-item {
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  
  img{
    cursor: pointer;
  }
}

.box {
  width: 100%;
  max-width: 500px;

  .title {
    font-weight: 600;
    font-size: 25px;
    line-height: 24px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .desc{
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  .amount{
    font-size: 16px;
    font-weight: 500;
    color: #ffae5d;
  }

  .price{
    color: green;
    font-weight: 700;
    margin: 10px 0px;
  }

  .delete{
    padding: 5px 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    border: none;
    color: cyan;
    font-size: 15px;
    letter-spacing: 1px;
    background-color: #001f3f;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: .2s;

    &:hover{
        transform: scale(1.1);
    }
  }
}


@media(max-width: 600px){
    .cart-item{
        flex-direction: column;

        img{
          width: 50%;
          height: 50%;
        }
    }


    .box{
        display: flex;
        align-items: center;
        flex-direction: column;
        height: auto;

        padding-bottom: 10px;

        .title{
          text-align: center;
          font-size: 18px;

        }

        .desc{
          margin: 0px 20px;
          text-align: center;
          font-size: 13px;
        }
    }
}
</style>
