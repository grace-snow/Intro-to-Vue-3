const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    }, 
    methods: {
      addToCart() {
        const btn = document.querySelector('.js-remove');
        this.cart += 1;
        btn.removeAttribute('disabled');
      },
      removeFromCart() {
        const btn = document.querySelector('.js-remove');
        if (this.cart > 0) {
          this.cart -= 1
        }
        if (this.cart === 0) {
          btn.setAttribute('disabled', '');
        }
      },
      updateImage(variantImage) {
        this.image = variantImage;
      }
    }
})
