<template>
  <div class="items">
    <ul>
      <li><p>Fresh</p></li>
      <li><p>Today's Deals</p></li>
      <li><p>Mobiles</p></li>
      <li><p>Gift Cards</p></li>
      <li><p>Women Clothing</p></li>
      <li><p>Men Clothing</p></li>
      <li><p>Kid Clothing</p></li>
      <li><p>Health</p></li>
      <li><p>Pet corner</p></li>
      <li><p>Books</p></li>
      <li><p>Beauty</p></li>
      <li><p>Kitchen</p></li>
      <li><p>Red Room</p></li>
      <li><p>Sports</p></li>
      <li><p>Bags</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.items {
  width: 100%;
  margin-top: 20px;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      list-style-type: none;
      cursor: pointer;
      p {
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;
        color: #606060;
      }
    }
  }
}
</style>
