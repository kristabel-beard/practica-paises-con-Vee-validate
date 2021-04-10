
components: {
    LayoutDefault
},
data(){
    return {
        todo:{}
    }
},
methods: {
    increment() {
        this.$store.commit ('increment')
    }
},
getTodoById(id){
    this.todo = this.$store.getters.getTodoById(id)
}
},
computed: {
    todos(){
        return this.$store.getters.getTodoById(id)
    }
},
count(){
    return this.$store.state.count
},
dondeTodos() {
    return this.$store.getters.dondeTodos
}
}}