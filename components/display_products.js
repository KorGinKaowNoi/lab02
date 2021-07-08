app.component('display_products',{
    template: `
    <div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :src="image" :class="{oos: !inStock}" >
            <img src="/assets/images/oos.png" :class="{oos: inStock}" >
        </div>
        <div class="product-info">
            <h1>{{ title}}</h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0 || !inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor:variant.color}">{{ variant.color}}</div>
            <button class=" button " :disabled="!inStock" @click="addToCart " :class="{disabled: !inStock}">Add to Cart</button>
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
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity:0 },
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50 }
            ],
            selected_item:0,
            cart: 0,
            brand:"donut",
            is_onsale:true

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            variantImage = this.variants[variantImage].image;
            this.image = variantImage
        },
        updateVariant(index){
            this.selected_item=index
        }
    },
    computed:{
        title(){
            let onsale="";
            if(this.variants[this.selected_item].quantity>0){
                onsale="is on the sale"
            }else{
                onsale="is not on the sale"
            }
            return this.brand+" "+this.product+" "+onsale
        },
        image(){
            return this.variants[this.selected_item].image;
        },
        inStock(){
            return this.variants[this.selected_item].quantity;
        }
    }
})
