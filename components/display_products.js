app.component('display_products',{
    props:{
        premuim:{
            type:Boolean,
            required: true
        }
    },


    template: 
    /*html*/
    `
    <div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :src="image" :disabled="!is_onsale" :class="{'out-of-stock-img': !is_onsale}">
        </div>
        <div class="product-info">
            <h1>{{ title}}</h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0 || !inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p> shpping: {{shipping}} </p>
            <display_details :details="details"></display_details>

            <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor:variant.color}">{{ variant.color}}</div>
            <button class=" button " :disabled="!inStock" @click="addToCart" :class="{disabled: !inStock}">Add to Cart</button>
            <button class=" button " @click="remove">remove</button>
            <review-list  :reviews="reviews"></review-list>    
            <review-form @review-submitted="add_review"></review-form>
               
            

            </div>
    </div>
</div>

    `,
    data() {
        return {
            product: 'Shoes',
            // image: './assets/images/socks_green.jpg',
            // inStock: true ,
            inventory: 100,
            variants: [
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity:0 },
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50 }
            ],
            selected_item:0,
            brand:"donut",
            is_onsale:false,
            reviews:[],
            details:['50% cotton', '30% wool', '20% polyester'],


        }
    },
    methods: {
        updateImage(variantImage) {
            variantImage = this.variants[variantImage].image;
            this.image = variantImage
        },
        updateVariant(index){
            this.selected_item=index
        },
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selected_item].id)
        },
        remove(){
            this.$emit('remove_cart',this.variants[this.selected_item].id)
        },
        add_review(review){
            this.reviews.push(review)
            console.log(review)
        }
    },
    computed:{
        title(){
            let onsale="";
            if(this.variants[this.selected_item].quantity>0){
                onsale="is on the sale"
            }
            return this.brand+" "+this.product+" "+onsale
        },
        image(){
            return this.variants[this.selected_item].image;
        },
        inStock(){
            return this.variants[this.selected_item].quantity;
        },
        shipping(){
            if(this.premuim){
                return "Free"
            }
            return 30
        }
    }
});
