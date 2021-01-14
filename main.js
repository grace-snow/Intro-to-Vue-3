const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      updateCart(id) {
        if (this.cart.length >= 0) {
          this.cart.push(id);
        }
      }
    }
})
