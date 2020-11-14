import Vue from "vue"
import VueRouter from "vue-router"
const Home = ()=>import("../view/home/Home")
const Category = ()=>import("../view/category/Category")
const ShoppingCar = ()=>import("../view/shoppingCar/ShoppingCar")
const Profile = ()=>import("../view/profile/Profile")
const Detail = ()=>import("../view/detail/Detail")


Vue.use(VueRouter)


const routes = [
  {
    path:"/",
    redirect:'/home'   /*  redirect   重定项  */
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/shoppingCar",
    component:ShoppingCar
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/detail",
    component:Detail
  },
]



const router = new VueRouter({
  routes,
  mode:'history'
})

export default  router