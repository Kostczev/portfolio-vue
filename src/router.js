import { createRouter, createWebHistory } from 'vue-router';
//import vCatalog from '@/components/catalog/v-catalog.vue';
//import vCart from '@/components/cart/v-cart.vue';
import pProjects from '@/components/projects/p-projects.vue';
import pEducation from '@/components/p-education.vue';
import pAboutMe from '@/components/p-about-me.vue';

export default createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         redirect: { name: 'aboutMe' }
      },
      { 
         path: '/portfolio-vue/', 
         component: pAboutMe, 
         name: 'aboutMe' 
      },
      { 
         path: '/portfolio-vue/projects', 
         component: pProjects, 
         name: 'projects', 
      },
      { 
         path: '/portfolio-vue/education', 
         component: pEducation, 
         name: 'education', 
      }
   ]
})