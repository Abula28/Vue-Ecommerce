<template>
  <div class="card" @click="openInner">
    <img :src="data.img" alt="fryer" />
    <p class="desc">{{data.title}}</p>

    <div class="prices">
      <p class="price"><span>₹</span>{{data.price}}</p>

      <p class="discount">{{ data.discount }}</p>
    </div>
  </div>
</template>



<script>
export default{
    props:{
        data: {
            required: true,
            type: Object,
        }
    },
    methods:{
      openInner(){
        this.$router.push({path: 'Inner', query: {plan: this.data.id}})
        console.log('click')
        console.log(data.img)
      }
    }
}

</script>

<style lang="scss">
.card {
  width: 100%;
  max-width: 236px;
  cursor: pointer;
  transition: all .5s;
  border-radius: 5px;
  &:hover{
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .desc {
    margin: 5px 10px 5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  .prices {
    margin: 0px 10px 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }

    .discount {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ff3232;
    }
  }
}

@media(max-width: 1000px){
   .card{
    max-width: 200px;
    img{
      width: 60%;
      height: 60%;
      margin: auto;
    }
   }
}
</style>
