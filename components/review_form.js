app.component('review_form',{
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
    <h3> leave a review </h3>
    <label for="name"> Name </label>
    <input id="name" v-model="name">
    <label for="review"> review: </label>
    <textarea id="review" v-model="review"></textarea>
    <label for="rating"> rating </label>
    <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>
    <input type="submit" class="button" value="submit" @click="add_review">
    </form>
    `,
    data(){
        return {
            name:'',
            review:'',
            rating: null,
            reviews:[]

        }
    },
    methods:{
        onSubmit(){
            let produceReview = {
                name:this.name,
                review:this.review,
                rating:this.rating
            }
            console.log(produceReview)
            this.$emit('review-submitted',produceReview);
            this.name=''
            this.review=''
            this.ating= null
        },
        add_review(review){
            this.reviews.push(review)
        }
    }
})