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
    <div id="wrapper">
 
  <input type="radio" id="qy" name="qy" v-model="qy" value="yes">Yes
  <p>
  <input type="radio" id="qn" name="qn" v-model="qn" value="no">No
  </p>
  </div>

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
            qy:'',
            qn:''

        }
    },
    methods:{
        onSubmit(){
            if(this.name==='' || this.rating==='' ||this.review===''){
                alert("please complete the form")
            }else{
                let produceReview = {
                name:this.name,
                review:this.review,
                rating:this.rating,
                qn:this.qn,
                qy:this.qy
            }
            // console.log(produceReview)
            this.$emit('review-submitted',produceReview);
            this.name=''
            this.review=''
            this.qn='',
            this.qy='',
            this.rating= null
            }
            
        },
        add_review(review){
            this.reviews.push(review)
            console.log(review)
        }
    }
})