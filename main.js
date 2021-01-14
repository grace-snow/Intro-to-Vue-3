const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      addById(id) {
        if (this.cart.length >= 0) {
          this.cart.push(id);
        }
      }, 
      removeById(id) {
        const index = this.cart.indexOf(id);

        if (index > -1) {
          this.cart.splice(index, 1);
        }
      }
    }
})
