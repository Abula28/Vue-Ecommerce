<template>
  <section class="main-sect">
    <div class="location-search">
      <a
        href="https://www.google.com/maps/place/New+Delhi,+Delhi,+India/@28.5274851,77.1389453,12z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139391!4d77.2090212"
        target="_blank"
      >
        <button class="locBtn">
          <img src="../Img/location.png" alt="location" />
          Delhi, 110110
        </button>
      </a>

      <div class="search">
        <input v-model="searchWord" type="search" placeholder="Search" />
        <img src="../Img/search.png" alt="search" />
      </div>
    </div>

    <Items />

    <div class="deals">
      <div class="head-text">
        <h1 v-if="!error">
          We picked some <span class="spanColor">cool things</span> for you!*
        </h1>
      </div>

      <div class="cards-side">
        <p class="error" v-show="error">Item not found...</p>
        <div v-if="!error" class="cards-text">
          <p>hot deals for you</p>
        </div>
        <div class="cards">
          <Products
            v-for="(item, index) in getData"
            :key="index"
            :data="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Items from "../components/Items.vue";
import Products from "../components/Products.vue";

import prData1 from "../products1.json";

export default {
  components: {
    Items,
    Products,
  },
  data() {
    return {
      productsData1: prData1,
      searchWord: "",
      error: false,
    };
  },
  watch: {
    getData: {
      immediate: true,
      handler: function () {
        if (this.getData.length === 0) {
          this.error = true;
        } else {
          this.error = false;
        }
      },
    },
  },

  computed: {
    getData() {
      return this.productsData1.filter((el) =>
        el.title.toLocaleLowerCase().includes(this.searchWord)
      );
    },

    getData2() {
      return this.productsData2.filter((el) =>
        el.title.toLocaleLowerCase().includes(this.searchWord)
      );
    },
  },
};
</script>

<style lang="scss">
.location-search {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  text-decoration: none;
}
.locBtn {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffae5d;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  img {
    margin-right: 10px;
  }
}
.search {
  position: relative;
  input {
    padding: 16px 300px 16px 16px;
    border: 1px solid rgba(128, 128, 128, 0.5);
    border-radius: 20px;
    outline: none;
    font-size: 20px;
    font-weight: 500;

    &::placeholder {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #808080;
    }
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  img {
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 16px;
  }
}

.spanColor {
  color: #ffae5d;
}

.deals {
  margin-top: 104px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 94px;
}

.head-text {
  width: 100%;

  h1 {
    font-weight: 300;
    font-size: 96px;
    line-height: 100px;

    span {
      font-weight: 600;
    }
  }
}

.cards-side {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}

.error {
  font-size: 45px;
  font-weight: 600;
  line-height: 50px;
}

.cards-text {
  width: 100%;
  padding: 10px 0px 10px 20px;
  border-bottom: 2px dashed #ffae5d;
  margin-bottom: 30px;

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
}

.cards {
  display: flex;
  gap: 54.5px;
  align-items: center;
  flex-flow: row wrap;
  width: 878px;

  &:last-child {
    margin-top: 10px;
  }
}
</style>
