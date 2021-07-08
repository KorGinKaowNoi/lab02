app.component('review-list',{
    props:{
        reviews:{
            type:Array,
            required:true
        }
    },
    template:
        /*html*/
    `
    <div class="review-container">
    <h3>review:</h3>
    <ul>
    <li v-for="(review,index) in reviews" :key="index">
    {{review.name}} gave this {{review.rating}} stars
    <br>
    "{{review.review}}"
    <br>
    and this guy think "{{review.q}}" to reccomend
    </li>
    <ul>
    </div>
    `
});