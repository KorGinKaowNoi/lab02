const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            inStock: true ,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity:0 }
            ],
            selected_item:0,
            cart: 0,
            brand:"donut"

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
            return this.brand+" "+this.product
        },
        image(){
            return this.variants[this.selected_item].image;
        },
        inStock(){
            return this.variants[this.selected_item].quantity;
        }
    }
})