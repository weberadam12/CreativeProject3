<template>
    <div class="page-container">
        <div class="content-wrap">
            <div v-if="this.$root.$data.cart.length > 0">
                <CartList :products="products" />
                <div id="total-line">
                    <hr align="left">
                    <h2>Total: ${{total}}</h2>
                </div>
            </div>
            <div v-else>
                <p>Your cart is empty.</p>
            </div>
        </div>


        <div class="footer">
            <hr>
            <a href="https://github.com/weberadam12/CreativeProject3.git">GitHub</a>
        </div>
    </div>
</template>

<script>
    import CartList from "../components/CartList.vue"
    export default {
        name: 'Store',
        components: {
            CartList
        },
        computed: {
            products() {
                return this.$root.$data.cart
            },
            total() {
                let cart = this.$root.$data.cart
                if (cart.length === 1){
                    return (cart[0].price * cart[0].quantity).toFixed(2)
                }
                let total = 0
                for(let i = 0; i < cart.length; i++){
                    total += (cart[i].price * cart[i].quantity)
                }
                return total.toFixed(2)
            }
        }
    }
</script>

<style scoped>
    p {
        margin: auto;
        width: 50%;
        border: 3px solid green;
        padding: 10px;
        text-align: center;
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
    #total-line {
        text-align: left;
        font-weight: bolder;
        margin-left: 25px;
    }

    #total-line hr {
        border: none;
        height: 5px;
        width: 80%;
        background-color: black;
    }
</style>
