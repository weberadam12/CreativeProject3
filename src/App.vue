<template>
  <div id="app">
    <div id="menu">
      <div id="side1">
        <router-link to="/store" class="menu-spacing">
          <div class="menu-item">
            <h2>Store</h2>
          </div>
        </router-link>
        <router-link to="/gallery" class="menu-spacing">
          <div class="menu-item">
            <h2>Gallery</h2>
          </div>
        </router-link>
        <router-link to="/about" class="menu-spacing">
          <div class="menu-item">
            <h2>About</h2>
          </div>
        </router-link>
      </div>
      <div id="brand">
        <router-link to="/">
          <h1 class="brand-name">Puppers</h1>
        </router-link>
      </div>
      <div id="side">
        <router-link to="/cart">
          <div class="menu-item">
            <img src="./assets/cart.png">
            <p>{{cartTotal}} items</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    computed:{
      cartTotal(){
        if(this.$root.$data.cart.length === 0) {
          return 0
        }
        return this.$root.$data.cart.reduce((a, b) => ({quantity: a.quantity + b.quantity})).quantity;
      }
    }
  }
</script>

<style>
  .brand-name {
    font-weight: bold;
    font-family: "Brush Script MT";
  }

  /** {*/
  /*  box-sizing: border-box;*/
  /*}*/

  #menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5px;
    grid-template-areas: "none brand side";
    margin-bottom: 5px;
  }

  #menu a {
    /*color: #B84901;*/
  }

  #brand {
    grid-area: brand;
    display: flex;
    justify-content: center;
    font-size: 12pt;
  }

  #side {
    grid-area: side;
    display: flex;
    justify-content: flex-end;
  }

  #side img {
    width: 50px;
  }

  #side1 {
    grid-area: none;
    display: flex;
    justify-content: flex-start;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    margin-right: 2%;
  }

  .menu-item p {
    margin: auto;
  }

  .menu-item h2 {
    margin: 10%;
    font-size: 15pt;
  }

  .menu-spacing {
    margin: 2%;
  }

  .browse {
    margin-right: 50px;
  }
</style>
