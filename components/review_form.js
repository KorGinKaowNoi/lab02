app.component('review-form',{
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
    <h3> leave a review </h3>
    <label for="name"> Name </label>
    <input id="name" v-model="name">
    <label for="review"> review: </label>
    <textarea id="review" v-model="review"></textarea>
    
    <label for="q"> would you reccomend this one? </label>
    <input id="q" v-model="q">
    <label for="rating"> rating </label>
    <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>
    <input type="submit" class="button" value="Submit">
    </form>

    `,
    data(){
        return {
            name:'',
            review:'',
            rating: null,
            q:''

        }
    },
    methods:{
        onSubmit(){
            if(this.name==='' || this.rating==='' ||this.review===''||this.q===''){
                alert("please complete the form")
            }else{
                let produceReview = {
                name:this.name,
                review:this.review,
                rating:this.rating,
                q:this.q
            }
            // console.log(produceReview)
            this.$emit('review-submitted',produceReview);
            this.name=''
            this.review=''
            this.q=''
            this.rating= null
            }
            
        },
        add_review(review){
            this.reviews.push(review)
            console.log(review)
        }
    }
})