import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import MyGallery from './components/MyGallery';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import About from './components/About';


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
            path:'/about',
            component: About
        },
        {       
         path:'**',
    component: Home
    }

    ]

})