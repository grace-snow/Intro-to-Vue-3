app.component('review-form', {
  template:
    /* html */
    `<form class="review-form" @submit.prevent="onSubmit">
    <!--/* .prevent on the submit is a modifier method that prevents the default */-->
    <h3>Leave a review</h3>
    
    <label for="name">Name:</label>
    <input id="name" v-model="name" type="text">
    
    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>
    
    <label for="rating">Rating:</label>
    <!--/* v-model.number - number is a modifier method that typecasts the data as number */-->
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>

    <input class="button" type="submit" value="Submit">  
  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: null,
    }
  }, 
  methods: {
    onSubmit() {
      // 4. add completion check
      if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
        alert('Please fill out all fields');
        return
      }

      // 1. capture form data - this will be the payload
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      }

      // 2. emit that data so it can live on the product, not this form
      this.$emit('review-submitted', productReview);

      // 3. Reset form data
      this.name = '';
      this.review = '';
      this.rating = null;
      this.recommend = null;
    }
  },
})