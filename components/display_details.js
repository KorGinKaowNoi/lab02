app.component("display_details",{
    props:{
        details:{
            type:Array,
            required:true
        }
    },
    data(){
        
    },
    template:
        /*html*/
        `<p v-for="word in show"> details: {{word}} </p>`,
        computed:{
            show(){
                if(this.details){
                    return this.details;
                }
                return ["no descriptions"]
            }
        },

    
});
