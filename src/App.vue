
<template>
  
<Header />
<router-view />
 
</template>

  <script>
  import Header from './components/Header.vue'
  import store from './store/index'


  export default{
    components: {
        Header,
    },

    mounted(){
      if(localStorage.getItem('cartItems')){
        store.commit('replaceProduct', JSON.parse(localStorage.getItem('cartItems')))
      }
    }
  }
  </script>
<style scoped>

</style>
