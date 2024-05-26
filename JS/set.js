var vm = new Vue({
    el: "#demo",
    data: {
        emps:[]
    },
    mounted() {
        axios.get("https://yapi.pro/mock/397320/ordermain").then(result =>{
            this.emps = result.data.data;
            console.log(this.emps);
        })
    }
});