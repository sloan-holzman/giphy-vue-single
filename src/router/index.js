import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Navbar from '@/components/Navbar'
import Searchpage from '@/components/Searchpage'
// import FavoritePage from '@/components/FavoritePage'
import Vuetify from 'vuetify'


Vue.use(Router)


export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/favorites',
    //   name: 'Favorites',
    //   component: FavoritePage
    // },
    {
      path: '/',
      name: 'Searchpage',
      component: Searchpage
    }
  ]
})
