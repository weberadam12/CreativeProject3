<template>
    <div class="page-container">
        <div class="content-wrap">
            <div class="wrapper">
                <div class="search">
                    <form class="pure-form">
                        <i class="fas fa-search"></i><input v-model="searchText" />
                    </form>
                </div>
            </div>
            <ProductList :products="products" />
        </div>

        <div class="footer">

            <a href="https://github.com/weberadam12/CreativeProject3.git">GitHub</a>
        </div>
    </div>
</template>

<script>
    import ProductList from "../components/ProductList.vue"
    export default {
        name: 'Store',
        components: {
            ProductList
        },
        data() {
            return {
                searchText: '',
            }
        },
        computed: {
            products() {
                return this.$root.$data.products.filter(product => product.item.toLowerCase().search(this.searchText) >= 0);
            }
        },
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search {
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 50%;
    }

    form {
        display: table;
        width: 100%;
    }
    .page-container {
    padding-top: 50px;
    padding-bottom: 0px;
    text-align: center;
    min-height: 100vh;
    background-color: #7194E3
    }
    .footer {
      text-align: center;
      background-color: #173985;
      color: #fff;
      padding: 20px;
      min-height: 50px;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 2.5rem;
    }
    i {
        display: table-cell;
        padding-left: 10px;
        width: 1px;
    }

    input {
        display: table-cell;
        font-size: 20px;
        border: none !important;
        box-shadow: none !important;
        width: 100%;
        height: 40px;
    }
</style>
