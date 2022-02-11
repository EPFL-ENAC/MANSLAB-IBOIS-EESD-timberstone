import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import MyGallery from './components/MyGallery';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import About from './components/About';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Wireframe from "./components/Wireframe";


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Home
        },
        {        
            path:'/sec1',
            component: MyGallery
        },

        {        
            path:'/sec2',
            component: SecondSection
        },
        {        
            path:'/sec3',
            component: ThirdSection
        },
        {        
            path:'/sec4',
            component: FourthSection
        },
        {        
            path:'/about',
            component: About
        },
        {        
            path:'/Home2',
            component: Home2
        },
        {        
            path:'/Home3',
            component: Home3
        },


        {
            path: "/wireframe",
            component: Wireframe,
          },
        {       
         path:'**',
    component: Home 
    }

    ]

})