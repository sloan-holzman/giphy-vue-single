import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Navbar from '@/components/Navbar'
import Searchpage from '@/components/Searchpage'
import Vuetify from 'vuetify'


Vue.use(Router)


export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'Searchpage',
      component: Searchpage
    }
  ]
})
