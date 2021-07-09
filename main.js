const app = Vue.createApp({
    data() {
        return {
            cart:[],
            premuim:true
        }
    },
    methods: {
        update_cart(id){
            this.cart.push(id);
        },
        remove_cart(id){
            let index  = this.cart.indexOf(id);
            this.cart.splice(index,1);
        }
      
        // updateImage(variantImage) {
        //     variantImage = this.variants[variantImage].image;
        //     this.image = variantImage
        // },
        // updateVariant(index){
        //     this.selected_item=index
        // }
    },
    computed:{
        // title(){ 
        //     let onsale="";
        //     if(this.variants[this.selected_item].quantity>0){
        //         onsale="is on the sale"
        //     }else{
        //         onsale="is not on the sale"
        //     }
        //     return this.brand+" "+this.product+" "+onsale
        // },
        // image(){
        //     return this.variants[this.selected_item].image;
        // },
        // inStock(){
        //     return this.variants[this.selected_item].quantity;
        // },
    }
})
