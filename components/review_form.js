app.component('review_form',{
    template:
    /*html*/
    `
    <form class="review-form">
    <h3> leave a review </h3>
    <label for="name"> Name </label>
    <input id="name">
    <label for="review"> review: </label>
    <textarea id="review"></textarea>
    <label for="rating"> rating </label>
    <select id="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>
    <input type="submit" class="button" value="submit">
    </form>
    `,
    data(){
        return {
            name:'',
            review:'',
            rating: null

        }
    }
})