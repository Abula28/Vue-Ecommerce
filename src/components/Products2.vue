<!-- <template>
    <div class="card" @click="openInner">
      <img :src="data.img" alt="fryer" />
      <p class="desc">{{data.title}}</p>
  
      <div class="prices">
        <p class="price">{{data.price}}</p>
  
        <p class="discount">{{ data.discount }}</p>
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
        this.$router.push({path: 'Inner', query: {plan: this.data.id}})
      }
    }
}

</script> -->