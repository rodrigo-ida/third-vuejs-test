const app = Vue.createApp({
    data(){
        return{
            result: 0,
            showResult: ''
        }
    },
    methods:{
        add(number){
            this.result = this.result + number
        }

    },
    watch: {
        result(value){
            if(value < 37){
                this.showResult = 'not yet'
            } else if (value == 37){
                this.showResult = value
            }else{
                that = this
                this.showResult = 'too much'
                setTimeout(()=> that.result = 0, 5000)
            }
        }
    },
    computed:{

    }
})

app.mount('#assignment')