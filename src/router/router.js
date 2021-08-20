import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/components/Login";
import QueryTable from "@/components/QueryTable";

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
        {path:'/',component: Login, name: 'login'},
        {path:'/query',component: QueryTable, name: 'queryTable'},
        {path:'*',redirect:'/'},
    ]
})
