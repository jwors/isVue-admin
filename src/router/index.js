import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter);

export const defaultRouter=[
    {
      path:'/',
      redirect:'/login'
    },
   {
    path:"/login",
    hidden:true,
    component:()=>import("@/views/login/login"),
   },
   {
    path:'/404',
    hidden:true,
    component:()=>import('@/views/login/404')
   }
]
const createRouter=()=>new VueRouter({
  routes:defaultRouter
})
const router=createRouter()
router.beforeEach((to,from,next)=>{
   if(to.meta.requireAuth){  //需要登陆权限的

   }else{
     next({
       path:'/login'
     })
   }
})
export default router;
